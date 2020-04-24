const byteArray = require('./byteArray'),
	Connection = require('./connection.js');
	request = require('request'),
	EventEmitter = require('events'),
	utils = require('./utils'),
	enums = require('./enums'),
	{identifiers} = enums;

/** Represents a client that connects to Transformice. */
class Client extends EventEmitter {
	constructor(){
		super();
		this.loops = {};
		this.version = 0;
		this.connectionKey = '';
		this.authClient = 0;
		this.identificationKeys = [];
		this.msgKeys = [];
		this.authServer = 0;
		this.ports = [];
		this.host = '';

		this.main = new Connection(this, 'main');
		this.bulle = new Connection(this, 'bulle');
	}

	/**
	 * Handles the known packets and emits events..
	 * @param {Connection} connection - The connection that received.
	 * @param {ByteArray} packet - The packet.
	 */
	handlePacket(conn, packet){
		const ccc = packet.readUnsignedShort();
		if (ccc == identifiers.correctVersion){
			const onlinePlayers = packet.readUnsignedInt();
			conn.fingerprint = packet.readByte();
			const community = packet.readUTF(),
				country = packet.readUTF();
			this.authServer = packet.readUnsignedInt();

			this.setSystemInfo('en', 'Linux', 'LNX 29,0,0,140');
			this.startHeartbeat();

		}else if (ccc == identifiers.loginReady){
			/**
				* Emitted when the client can login on the game. 
				* @event Client#loginReady
			*/
			this.emit('loginReady');

		}else if (ccc == identifiers.fingerprint){
			conn.fingerprint = packet.readByte();

		}else if (ccc == identifiers.bulleConnection){
			const bulle_cred_1 = packet.readUnsignedInt(),
				bulle_cred_2 = packet.readUnsignedInt(),
				bulle_ip = packet.readUTF();

			if (this.bulle.open)
				this.bulle.close()

			this.bulle = new Connection(this, 'bulle');
			this.bulle.connect(bulle_ip, this.ports[0]);
			this.bulle.on('connect', () => {
				this.bulle.send(identifiers.bulleConnection, new byteArray().writeUnsignedInt(bulle_cred_1).writeUnsignedInt(bulle_cred_2));
			});

		}else if (ccc == identifiers.logged) {
			this.playerId = packet.readUnsignedInt();
			this.nickname = packet.readUTF();
			this.playingTime = packet.readUnsignedInt();
			this.connectionTime = new Date().getTime();
			this.community = packet.readByte();
			this.pcode = packet.readUnsignedInt();
			/**
				* Emitted when the client has logged in. 
				* @event Client#logged
				* @property {String} nickname - The display nickname.
				* @property {Number} pcode - The client's code.
			*/
			this.emit('logged', this.nickname, this.pcode);

		}else if (ccc == identifiers.bulle){
			const code = packet.readUnsignedShort();

			if (code == 3){
				/**
					* Emitted when the client is connected to the community platform.
					* @event Client#ready
				*/
				this.emit('ready');
			}else{
				this.handleTribulle(code);
			};

		}else if (ccc == identifiers.roomMessage){
			const pcode = packet.readUnsignedInt(),
				nickname = packet.readUTF(),
				community = packet.readUnsignedByte(),
				message = packet.readUTF();
			/**
				* Emitted when the client is connected to the community platform.
				* @event Client#roomMessage
				* @property {String} playerName - The player who sent the message.
				* @property {Number} pcode - The player's code.
				* @property {enums.chatCommunity} community - The player's community.
				* @property {String} message - The message content.
			*/
			this.emit('roomMessage', nickname, pcode, community, message);

		}else if (ccc == identifiers.roomChange){
			const before = this.room;
			this.room = {isPublic : packet.readBoolean(), name : packet.readUTF()};
			/**
				* Emitted when the room is changed. 
				* @event Client#roomChange
				* @property {Object} before - The old room.
				* @property {Object} after - The new room.
				* @example 
				* client.on('roomChange', (before, after) => {
				* 	console.log('The room changed from '+before.name+' to '+after.name);
				* })
			*/
			this.emit("roomChange", before, this.room)

		}else{
			//console.log(c, cc, packet.buffer);
		}
	}

	handleTribulle(code){

	}

	/**
	 * Log in the game.
	 * @param {String} nickname - The client nickname.
	 * @param {String} password - The client password.
	 * @param {String} [room="1"] - The starting room.
	 */
	login(nickname, password, room="1"){
		const p = new byteArray().writeUTF(nickname).writeUTF(utils.SHAKikoo(password));
		p.writeUTF("app:/TransformiceAIR.swf/[[DYNAMIC]]/2/[[DYNAMIC]]/4").writeUTF(room);
		p.writeUnsignedInt(parseInt(BigInt(this.authServer) ^ BigInt(this.authClient)));
		this.main.send(identifiers.loginSend, p, enums.cipherMethod.xxtea);
	}

	/**
	 * Sends Handshake.
	 * @param {Number} version - The version.
	 * @param {String} key - The Connection key.
	 */
	sendHandshake(version, key){
		const p = new byteArray();
		p.writeShort(version);
		p.writeUTF(key);
		p.writeUTF('Desktop').writeUTF('-').writeInt(0x1fbd);
		p.writeUTF('').writeUTF('74696720697320676f6e6e61206b696c6c206d7920626f742e20736f20736164');
		p.writeUTF('A=t&SA=t&SV=t&EV=t&MP3=t&AE=t&VE=t&ACC=t&PR=t&SP=f&SB=f&DEB=f&V=LNX 29,0,0,140&M=Adobe Linux&R=1920x1080&COL=color&AR=1.0&OS=Linux&ARCH=x86&L=en&IME=t&PR32=t&PR64=t&LS=en-US&PT=Desktop&AVD=f&LFD=f&WD=f&TLS=t&ML=5.1&DP=72');
		p.writeInt(0).writeInt(0x1234).writeUTF('');
		this.main.send(identifiers.handshake, p);
	}

	/**
	 * Sets the community of the bot.
	 * @param {enums.community} [id=enums.community.en] - The community id.
	 */
	setCommunity(id=enums.community.en){
		const p = new byteArray().writeByte(id).writeByte(0);
		this.main.send(identifiers.community, p);
	}

	setSystemInfo(langue, sys, version){
		const p = new byteArray().writeUTF(langue).writeUTF(sys).writeUTF(version);
		this.main.send(identifiers.os, p);
	}

	/**
	 * Joins the tribe house.
	 */
	joinTribeHouse(){
		this.main.send(identifiers.joinTribeHouse, new byteArray());
	}

	/**
	 * Sends a message to the client's room.
	 * @param {String} message - The message.
	 */
	sendRoomMessage(message){
		this.bulle.send(identifiers.roomMessage, new byteArray().writeUTF(message), enums.cipherMethod.xor);
	}

	/**
	 * Sends a packet every 15 seconds to stay connected to the game.
	 */
	startHeartbeat(){
		this.main.send(identifiers.heartbeat, new byteArray());
		this.loops.heartbeat = setInterval(() => {
			this.main.send(identifiers.heartbeat, new byteArray());
			if (this.bulle.open)
				this.bulle.send(identifiers.heartbeat, new byteArray());
		}, 1000*15)
	}

	/**
	 * Starts the client.
	 * @param {String} api_tfmid - Your Transformice id.
	 * @param {String} api_token - Your token.
	 */
	start(tfmid, token){
		request('https://api.tocu.tk/get_transformice_keys.php?tfmid='+tfmid+'&token='+token,  (error, response, body) => {
			if (error){
				throw new Error(error);
			}
			const result = JSON.parse(body);
			if (result.success) {
				if (!result.internal_error) {
					this.version = result.version;
					this.connectionKey = result.connection_key;
					this.ports = result.ports;
					this.host = result.ip;
					this.authClient = result.auth_key;
					this.identificationKeys = result.identification_keys;
					this.msgKeys = result.msg_keys;
					this.main.connect(this.host, this.ports[0]);
					this.main.on('connect', () => {
						this.sendHandshake(this.version, this.connectionKey);
					});
				}else{
					if (result.internal_error_step == 2)
						throw new Error("The game might be in maintenance mode.");
					throw new Error('An internal error occur: '+internal_error_step);
				}
			}else{
				throw new Error('Can\'t get the keys : '+error);
			}

		});
	}

	/**
	 * Disconnects the client.
	 */
	disconnect(){
		for (let loop in this.loops){
			clearInterval(this.loops[loop]);
		}
		this.main.close();
		this.bulle.close();
		/**
			* Emitted when the client has disconnect. 
			* @event Client#disconnect
		*/
		this.emit('disconnect');
	}

}

Client.enums = enums;
module.exports = Client;