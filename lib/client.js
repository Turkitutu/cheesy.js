const byteArray = require('./byteArray'),
	Connection = require('./connection.js');
	request = require('request'),
	EventEmitter = require('events'),
	utils = require('./utils'),
	Enums = require('./enums'),
	{identifiers} = Enums;

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
			this.playerCode = packet.readUnsignedInt();
			this.emit('logged', this.nickname, this.playerCode);

		}else if (ccc == identifiers.bulle){
			const code = packet.readUnsignedShort();

			if (code == 3){
				this.emit('ready');
			}else{
				this.handleTribulle(code);
			};

		}else if (ccc == identifiers.roomMessage){
			const pcode = packet.readUnsignedInt(),
				nickname = packet.readUTF(),
				community = packet.readUnsignedByte(),
				message = packet.readUTF();
			this.emit('roomMessage', {nickname : nickname, pcode : pcode, community : community, content : message});

		}else if (ccc == identifiers.roomChange){
			const before = this.room;
			this.room = {isPublic : packet.readBoolean(), name : packet.readUTF()};
			this.emit("roomChange", before, this.room)

		}else{
			//console.log(c, cc, packet.buffer);
		}
	}

	handleTribulle(code){

	}

	login(nickname, password, room="1"){
		const p = new byteArray().writeUTF(nickname).writeUTF(utils.SHAKikoo(password));
		p.writeUTF("app:/TransformiceAIR.swf/[[DYNAMIC]]/2/[[DYNAMIC]]/4").writeUTF(room);
		p.writeUnsignedInt(parseInt(BigInt(this.authServer) ^ BigInt(this.authClient)));
		this.main.send(identifiers.loginSend, p, {blockCipher : true});
	}

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

	setCommunity(id){
		const p = new byteArray().writeByte(id).writeByte(0);
		this.main.send(identifiers.community, p);
	}
	setSystemInfo(langue, sys, version){
		const p = new byteArray().writeUTF(langue).writeUTF(sys).writeUTF(version);
		this.main.send(identifiers.os, p);
	}

	joinTribeHouse(){
		this.main.send(identifiers.joinTribeHouse, new byteArray());
	}

	sendRoomMessage(message){
		this.bulle.send(identifiers.roomMessage, new byteArray().writeUTF(message), {xorCipher : true});
	}

	startHeartbeat(){
		this.main.send(identifiers.heartbeat, new byteArray());
		this.loops.heartbeat = setInterval(() => {
			this.main.send(identifiers.heartbeat, new byteArray());
			if (this.bulle.open)
				this.bulle.send(identifiers.heartbeat, new byteArray());
		}, 1000*15)
	}

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

	disconnect(){
		for (let loop in this.loops){
			clearInterval(this.loops[loop]);
		}
		this.main.close();
		this.bulle.close();

		this.emit('disconnect');
	}

}

Client.Enums = Enums;
module.exports = Client;