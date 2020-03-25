const net = require('net'),
    byteArray = require('./byteArray'),
    EventEmitter = require('events');



class Connection extends EventEmitter {
    constructor(client, name){
        super();
        this.client = client;
        this.name = name;
		this.socket = null;
		this.open = false;
        this.fingerprint = 0;
        this.buffer = Buffer.alloc(0);
        this.length = 0;
    }

    connect(host, port){
		this.host = host;
        this.port = port;
		this.socket =  new net.createConnection({port: port, host: host}, () => {
            this.open = true;
            this.socket.on('data', data => {
                this.onData(data);
            });

            this.socket.on('close', () => {
                if (this.name == 'main')
                    this.client.disconnect();
            });

            this.socket.on('error', err => {
                throw new Error(err);
            });

            this.emit('connect');
            this.client.emit('connect', this);
		});

    }

    onData(data){
		this.buffer = Buffer.concat([this.buffer, data]);
		while (this.buffer.length > this.length){
			if (this.length == 0) {
                for (let i = 0; i < 5; i++) {
                    let byte = this.buffer.slice(0, 1)[0];
                    this.buffer = this.buffer.slice(1);
					this.length |= (byte & 127) << (i * 7);

					if (!(byte & 0x80))
						break;
                }
            }

			if (this.buffer.length >= this.length){
				this.client.handlePacket(this, new byteArray(this.buffer.slice(0, this.length)));
                this.buffer = this.buffer.slice(this.length);
                this.length = 0;

            }
        }
    }


    send(identifiers, packet, cipher = {xorCipher : false, blockCipher : false}){

        if (cipher.xorCipher){
            packet = packet.xorCipher(this.client.msgKeys, this.fingerprint);
        }else if (cipher.blockCipher){
            packet = packet.blockCipher(this.client.identificationKeys);
        }

        packet = new byteArray().writeByte(identifiers[0]).writeByte(identifiers[1]).writeBytes(packet)
        let m = new byteArray(),
            size = packet.length,
            size_type = size >>> 7;
    
        while (size_type !== 0) {
            m.writeUnsignedByte(size & 0x7f | 0x80);
            size = size_type;
            size_type >>>= 7;
        }
        m.writeUnsignedByte(size & 0x7f);
        m.writeByte(this.fingerprint);
        m.writeBytes(packet);
        this.socket.write(m.buffer);
        this.fingerprint = (this.fingerprint + 1) % 100;
    }

    close(){
        if (this.open){
            this.open = false;
            this.socket.destroy();
        }
    }
    
}

module.exports = Connection;