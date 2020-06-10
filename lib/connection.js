const net = require('net'),
	byteArray = require('./byteArray'),
	{cipherMethod} = require('./enums.js'),
	EventEmitter = require('events');


/** Represents a client that connects to Transformice. */
class Connection extends EventEmitter {
	/**
	 * Constructor.
	 * @param {Client} client - The client.
	 * @param {String} name - The Connection name.
	 * @example
	 * const conn = new Connection(client, 'connectionName');
	 */
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

	/**
	 * Connects the socket.
	 * @param {String} host - The host.
	 * @param {Number} port - The port.
	 */
	connect(host, port){
		this.host = host;
		this.port = port;
		this.socket =  new net.createConnection({port: port, host: host}, () => {
			this.open = true;
			this.socket.on('data', data => {
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
			});

			this.socket.on('close', () => {
				if (this.name == 'main')
					this.client.disconnect();
			});

			this.socket.on('error', err => {
				throw new Error(err);
			});

			/**
				* Emitted when the connection is successfully connected. 
				* @event Connection#connect
			*/
			this.emit('connect');
			/**
				* Emitted when a connection is successfully connected. 
				* @event Client#connect
				* @property {Connection} connection - The connection which has connected.
			*/
			this.client.emit('connect', this);
		});

	}

	/**
	 * Sends a packet to the connection.
	 * @param {enums.identifiers} identifier - The identifier of the packet.
	 * @param {ByteArray} packet - The packet.
	 * @param {enums.cipherMethod} [method=enums.cipherMethod.none] - The algorithm method to cipher the packet with it.
	 */
	send(identifier, packet, method=cipherMethod.none){

		if (method == cipherMethod.xor){
			packet = packet.xorCipher(this.client.msgKeys, this.fingerprint);
		}else if (method == cipherMethod.xxtea){
			packet = packet.blockCipher(this.client.identificationKeys);
		}
		packet = new byteArray().writeUnsignedShort(identifier).writeBytes(packet);
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

	/**
	 * Close the connection.
	 */
	close(){
		if (this.open){
			this.open = false;
			this.socket.destroy();
		}
	}

}

module.exports = Connection;