const fetch = require('node-fetch'),
EventEmitter = require('events');

const ByteArray = require('./byteArray'),
Connection = require('./connection');

const Room = require('./room'),
	RoomMessage = require('./roomMessage'),
	WhisperMessage = require('./whisperMessage'),
	Player = require('./player'),
	Friend = require("./friend"),
	utils = require('./utils'),
	enums = require('./enums'),
	{identifiers, oldIdentifiers} = enums;

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
		this.tribulleID = 0;
		/**
		 * The online players when the bot log.
		 * @type {Number}
		 */
		this.onlinePlayers = 0;
		/**
		 * The client's room.
		 * @type {Room}
		 */
		this.room = null;
		/**
		 * The client's player.
		 * @type {Player}
		 */
		this.player = null;
		/**
		 * The client's ID.
		 * @type {Number}
		 */
		this.playerID = 0;
		/**
		 * The client's nickname.
		 * @type {String}
		 */
		this.nickname = '';
		/**
		 * The client's playing time.
		 * @type {Number}
		 */
		this.playingTime = 0;
		/**
		 * The connection time.
		 * @type {Number}
		 */
		this.connectionTime = 0;
		/**
		 * The client's community code.
		 * @type {enums.community}
		 */
		this.community = 0;
		/**
		 * The language suggested by the server.
		 * @type {String}
		 */
		this.language = 0;
		/**
		 * The client's temporary code.
		 * @type {Number}
		 */
		this.pcode = 0;

		this.main = new Connection(this, 'main');
		this.bulle = new Connection(this, 'bulle');
	}

	/**
	 * Handles the old packets and emits events.
	 * @param {Connection} connection - The connection that received.
	 * @param {ByteArray} packet - The packet.
	 */
	handleOldPacket(conn, ccc, data){
		if (ccc == oldIdentifiers.roomPlayerLeft){
			const player = this.room.getPlayer('pcode', +data[0])
			if (player){
				this.room.removePlayer(player);
				/**
					* Emitted when a player left the room. 
					* @event Client#roomPlayerLeft
					* @property {Player} player - The player who left.
				*/
				this.emit("roomPlayerLeft", player);
			}
		}
		/**
			* Emitted when a new old packet received.
			* @event Client#rawOldPacket
			* @property {Connection} connection - The connection which sent the packet (`main` or `bulle`).
			* @property {enums.oldIdentifiers} ccc - The old identifier code of the packet.
			* @property {Array} data - The data.
		*/
		this.emit('rawOldPacket', conn, ccc, data);
	}

	/**
	 * Handles the known packets and emits events.
	 * @param {Connection} connection - The connection that received.
	 * @param {ByteArray} packet - The packet.
	 */
	handlePacket(conn, packet){
		const ccc = packet.readUnsignedShort();
		if (ccc == identifiers.oldPacket){
			const data = packet.readUTF().split(String.fromCharCode(1))
			const a = data.splice(0, 1)[0];
			const ccc = (a.charCodeAt(0) << 8) | a.charCodeAt(1);
			this.handleOldPacket(conn, ccc, data);

		}else if (ccc == identifiers.handshakeOk){
			this.onlinePlayers = packet.readUnsignedInt();
			this.language = packet.readUTF();
			const country = packet.readUTF();
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
			const timestamp = packet.readUnsignedInt(),
				playerId = packet.readUnsignedInt(),
				pcode = packet.readUnsignedInt(),
				host = packet.readUTF(),
				ports = packet.readUTF().split('-').map(port => ~~port);

			if (this.bulle.open)
				this.bulle.close();

			this.bulle = new Connection(this, 'bulle');
			this.bulle.connect(host, this.ports[0]);
			this.bulle.on('connect', () => {
				this.bulle.send(identifiers.bulleConnection, new ByteArray().writeUnsignedInt(timestamp).writeUnsignedInt(playerId).writeUnsignedInt(pcode));
			});

		}else if (ccc == identifiers.logged) {
			this.playerID = packet.readUnsignedInt();
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
				this.handleTribulle(code, packet);
			};

		}else if (ccc == identifiers.luaChatLog){
			/**
				* Emitted when the client receives lua logs or errors from `#Lua` chat.
				* @event Client#luaLog
				* @property {String} message - a log message
			*/
			this.emit('luaLog', packet.readUTF());


		}else if (ccc == identifiers.roomMessage){
			const player = this.room.getPlayer('nickname', packet.readUTF()),
				content = packet.readUTF();
			const message = new RoomMessage(this, player, content);
			/**
				* Emitted when a player sends a message in the room.
				* @event Client#roomMessage
				* @property {RoomMessage} message - The message.
			*/
			this.emit('roomMessage', message);

		}else if (ccc == identifiers.roomChange){
			const before = this.room;
			const isPublic = packet.readBoolean(), 
				name = packet.readUTF(),
				language = packet.readUTF();
			this.room = new Room(this, isPublic, name, language);
			/**
				* Emitted when the room is changed. 
				* @event Client#roomChange
				* @property {Room} before - The old room.
				* @property {Room} after - The new room.
				* @example 
				* client.on('roomChange', (before, after) => {
				* 	console.log('The room changed from '+before.name+' to '+after.name);
				* })
			*/
			this.emit("roomChange", before, this.room)

		}else if (ccc == identifiers.roomPlayerList){
			const before = this.room.playerList;
			this.room.playerList = {};
			const length = packet.readUnsignedShort();
			for (let i = 0; i < length; i++) {
				const player = new Player().read(packet);
				this.room.playerList[player.pcode] = player;
			}
			this.player = this.room.getPlayer('pcode', this.pcode);
			/**
				* Emitted when the room playerList is updated. 
				* @event Client#roomUpdate
				* @property {Object} before - The old playerList.
				* @property {Object} after - The new playerList.
			*/
			this.emit("roomUpdate", before, this.room.playerList);

		}else if (ccc == identifiers.roomNewPlayer){
			const player = new Player().read(packet);
			if (this.room.playerList[player.pcode]){
				/**
					* Emitted when the room playerList is updated. 
					* @event Client#roomPlayerUpdate
					* @property {Player} before - Old player data.
					* @property {Player} after - New player data.
				*/
				this.emit("roomPlayerUpdate", this.room.playerList[player.pcode], player);
			}else{
				/**
					* Emitted when a new player has joined. 
					* @event Client#roomPlayerJoin
					* @property {Player} player - The player.
				*/
				this.emit("roomPlayerJoin", player);
			}
			this.room.updatePlayer(player);

		}else if (ccc == identifiers.languageChange){

			const language = packet.readUTF(),
				country = packet.readUTF(),
				readRight = packet.readBoolean(),
				readSpecialChar = packet.readBoolean();
			/**
				* Emitted when a language is changed.
				* @event Client#languageChange
				* @property {enums.language} language - The iso code of the language.
				* @property {String} country - The code of the country.
				* @property {Boolean} readRight - Whether the language is read left to right or not.
				* @property {Boolean} readSpecialChar - Whether the language has special characters or not.
			*/
			this.emit("languageChange", language, country, readRight, readSpecialChar);
		}else{
			//console.log(c, cc, packet.buffer);
		}
		/**
			* Emitted when a new packet received from main or bulle connection.
			* @event Client#rawPacket
			* @property {Connection} connection - The connection which sent the packet (`main` or `bulle`).
			* @property {enums.identifiers} ccc - The identifier code of the packet.
			* @property {ByteArray} packet - The packet.
		*/
		this.emit('rawPacket', conn, ccc, packet);
	}

	/**
	 * Handles the community platform packets and emits events.
	 * @param {Number} code - The community platform code.
	 * @param {ByteArray} packet - The community platform packet.
	 */
	handleTribulle(code, packet){
		if (code == 66){
			const author = packet.readUTF(),
			community = packet.readUnsignedInt(),
			sentTo = packet.readUTF(),
			content = packet.readUTF();
			const message = new WhisperMessage(this, author, community, sentTo, content);
			/**
				* Emitted when a player sends a whisper message to the client.
				* @event Client#whisper
				* @property {WhisperMessage} message - The message.
			*/
			this.emit('whisper', message);
		} else if (code == 34){

			let friends = [];
			
			let soulmate = (new Friend().read(packet, true)); // soulmate
			let hasSoulmate = !(soulmate.id == 0 && soulmate.nickName == '');
			if (hasSoulmate) friends.push(soulmate);
			let totalFriends = packet.readUnsignedShort();
			
			while (totalFriends--) {
				friends.push(new Friend().read(packet, false));
			}

			/**
				* Emmitted when the client received the friend list
				* @event Client#friendList
				* @property {Array<Friend>} friends - An array of friends
				* @property {String|null} soulmate - The name of the soulmate, `null` if absent
			 */
			this.emit('friendList', friends, hasSoulmate ? soulmate.nickName : null);
		}
		/**
			* Emitted when a new community platform packet received.
			* @event Client#rawTribulle
			* @property {Number} code - The community platform code.
			* @property {ByteArray} packet - The packet.
		*/
		this.emit('rawTribulle', code, packet);
	}

	/**
	 * Sends a packet to the community platform (tribulle).
	 * @param {Number} code - The community platform code.
	 * @param {ByteArray} packet - The community platform packet.
	 */
	sendTribullePacket(code, packet){
		this.tribulleID = (this.tribulleID % 0x100000000) + 1
		const p = new ByteArray().writeShort(code).writeUnsignedInt(this.tribulleID)
		p.writeBytes(packet);
		this.main.send(identifiers.bulle, p, enums.cipherMethod.xor)
	}

	/**
	 * Log in to the game.
	 * @param {String} nickname - The client nickname.
	 * @param {String} password - The client password.
	 * @param {String} [room="1"] - The starting room.
	 */
	login(nickname, password, room="1"){
		const p = new ByteArray().writeUTF(nickname).writeUTF(utils.SHAKikoo(password));
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
		const p = new ByteArray();
		p.writeShort(version);
		p.writeUTF("en");
		p.writeUTF(key);
		p.writeUTF('Desktop').writeUTF('-').writeInt(0x1fbd);
		p.writeUTF('')
		p.writeUTF('ca26ba3ada3fc0aadba7d94e5677bee000333d8f46bab4c3cb32e615587e7212');
		p.writeUTF('A=t&SA=t&SV=t&EV=t&MP3=t&AE=t&VE=t&ACC=t&PR=t&SP=f&SB=f&DEB=f&V=LNX 29,0,0,140&M=Adobe Linux&R=1920x1080&COL=color&AR=1.0&OS=Linux&ARCH=x86&L=en&IME=t&PR32=t&PR64=t&LS=en-US&PT=Desktop&AVD=f&LFD=f&WD=f&TLS=t&ML=5.1&DP=72');
		p.writeInt(0).writeInt(0x1234).writeUTF('');
		this.main.send(identifiers.handshake, p);
	}

	/**
	 * Sets the language of the client.
	 * @param {enums.language} [id=enums.language.en] - The language iso code.
	 */
	setLanguage(code=enums.language.en){
		if (!(typeof code === 'string' || code instanceof String))
			code = enums.language.en;
		const p = new ByteArray().writeUTF(code);
		this.main.send(identifiers.language, p);
	}

	setSystemInfo(langue, sys, version){
		const p = new ByteArray().writeUTF(langue).writeUTF(sys).writeUTF(version);
		this.main.send(identifiers.os, p);
	}

	/**
	 * Joins the tribe house.
	 */
	joinTribeHouse(){
		this.main.send(identifiers.joinTribeHouse, new ByteArray());
	}

	/**
	 * Load a lua script in the room.
	 * @param {String} script - The script code.
	 */
	loadLua(script){
		const length = Buffer.byteLength(script);
		const p = new ByteArray().writeUnsignedShort(length >> 8).writeUnsignedByte(length & 255).writeMultiByte(script);
		this.bulle.send(identifiers.loadLua, p);
	}

	/**
	 * Sends a message to the client's room.
	 * @param {String} message - The message.
	 */
	sendRoomMessage(message){
		this.bulle.send(identifiers.roomMessage, new ByteArray().writeUTF(message), enums.cipherMethod.xor);
	}

	/**
	 * Sends a server command.
	 * @param {String} message - The command message (without the `/`).
	 * @exemple
	 * client.sendCommand('mod');
	 */
	sendCommand(message){
		this.main.send(identifiers.command, new ByteArray().writeUTF(message), enums.cipherMethod.xor);
	}

	/**
	 * Sends a request to the server to join a room with specific name.
	 * @param {String} name - The room name.
	 * @param {Boolean} [isSalonAuto=false] - Whether the change room must be /salonauto or not.
	 */
	joinRoom(name, isSalonAuto=false){
		this.main.send(identifiers.room, new ByteArray().writeUTF('').writeUTF(name).writeByte(isSalonAuto))
	}

	/**
	 * Sends a whisper message to a player.
	 * @param {String} nickname - The nickname of the player.
	 * @param {String} message - The message.
	 */
	sendWhisper(nickname, message){
		this.sendTribullePacket(52, new ByteArray().writeUTF(nickname.toLowerCase()).writeUTF(message))
	}

	/**
	 * Request friend list.
	 */
	requestFriendList(){
		this.sendTribullePacket(28, new ByteArray())
	}


	/**
	 * Sends a packet every 15 seconds to stay connected to the game.
	 */
	startHeartbeat(){
		this.main.send(identifiers.heartbeat, new ByteArray());
		this.loops.heartbeat = setInterval(() => {
			this.main.send(identifiers.heartbeat, new ByteArray());
			if (this.bulle.open)
				this.bulle.send(identifiers.heartbeat, new ByteArray());
		}, 1000*15)
	}

	/**
	 * Starts the client.
	 * @param {String} api_tfmid - Your Transformice id.
	 * @param {String} api_token - Your token.
	 * @returns {Promise<void>}
	 */
	async start(tfmid, token){
		const response = await fetch('https://api.tocuto.tk/get_transformice_keys.php?tfmid='+tfmid+'&token='+token);
		const result = await response.json();
		if (result.success) {
			if (!result.internal_error) {
				this.version = result.version;
				this.connectionKey = result.connection_key;
				this.ports = result.ports;
				this.host = result.ip;
				this.authClient = result.auth_key;
				this.identificationKeys = result.identification_keys;
				this.msgKeys = result.msg_keys;
				this.main = new Connection(this, 'main');
				this.main.connect(this.host, this.ports[0]);
				this.main.on('connect', () => {
					this.sendHandshake(this.version, this.connectionKey);
				});
			}else{
				if (result.internal_error_step == 2)
					throw new Error("The game might be in maintenance mode.");
				throw new Error('An internal error occur: '+result.internal_error_step);
			}
		}else{
			throw new Error('Can\'t get the keys : '+result.error);
		}
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
Client.byteArray = ByteArray;
module.exports = Client;
