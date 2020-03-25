// Thanks to @Omaraldin

const { deflateSync, deflateRawSync, inflateSync, inflateRawSync } = require('zlib'),
	{ encodingExists, decode, encode } = require('iconv-lite');

class ByteArray {
	constructor(buff) {
		this.buffer =  Buffer.isBuffer(buff) ? buff : Array.isArray(buff) ? Buffer.from(buff) : Buffer.alloc(0);
		this.writePosition = this.buffer.length;
		this.readPosition = 0;
		this.endian = 'BE';
	}


	get length() {
		return this.buffer.length;
	}

	get [Symbol.toStringTag]() {
		return 'ByteArray';
	}

	get bytesAvailable() {

		return this.length - this.readPosition;
	}

	expand(value) {
		if ((this.length - this.writePosition) < value) {
			this.buffer = Buffer.concat([this.buffer, Buffer.alloc(value - (this.length - this.writePosition))]);
		}
	}

	clear() {
		this.buffer = Buffer.alloc(0);
		this.writePosition = 0;
		this.readPosition = 0;
	}

	readBoolean() {
		return this.readByte() !== 0;
	}

	readByte() {
		return this.buffer.readInt8(this.readPosition++);
	}

	readBytes(bytes, offset=0, length=0) {
		if (length === 0)
			length = this.bytesAvailable;

		if (length > this.bytesAvailable)
			throw new RangeError('End of buffer was encountered.');

		if (bytes.length < (offset + length))
			bytes.expand(offset + length);

		for (let i=0; i < length; i++)
			bytes.buffer[i + offset] = this.buffer[i + this.readPosition];

		this.readPosition += length;
	}

	readInt() {
		const value = this.buffer[`readInt32${this.endian}`](this.readPosition);
		this.readPosition += 4;
		return value;
	}

	readMultiByte(length, charset='utf-8') {
		const pos = this.readPosition;
		this.readPosition += length;

		if (encodingExists(charset)) {
			const buff = this.buffer.slice(pos, this.readPosition),
				stripBOM = (charset === 'utf8' || charset === 'utf-8') && buff.length >= 3 && buff[0] === 0xEF && buff[1] === 0xBB && buff[2] === 0xBF,
				value = decode(buff, charset, {stripBOM});
			if (stripBOM)
				length -= 3;
			if (Buffer.byteLength(value) !== length)
				throw new RangeError('End of buffer was encountered.');
			return value;
		} else
			throw new Error(`Invalid character set '${charset}'`);
	}

	readShort() {
		const value = this.buffer[`readInt16${this.endian}`](this.readPosition);
		this.readPosition += 2;
		return value;
	}

	readUnsignedByte() {
		return this.buffer.readUInt8(this.readPosition++);
	}

	readUnsignedInt() {
		const value = this.buffer[`readUInt32${this.endian}`](this.readPosition);
		this.readPosition += 4;
		return value;
	}

	readUnsignedShort() {
		const value = this.buffer[`readUInt16${this.endian}`](this.readPosition);
		this.readPosition += 2;
		return value;
	}

	readUTF() {
		return this.readMultiByte(this.readUnsignedShort());
	}

	readUTFBytes(length) {
		return this.readMultiByte(length);
	}

	toJSON() {
		return Object.assign({}, this.buffer.toJSON().data);
	}

	toString() {
		return decode(this.buffer, 'utf-8');
	}

	writeBoolean(value) {
		return this.writeByte(value ? 1 : 0);
	}

	writeByte(value) {
		this.expand(1);
		this.buffer.writeInt8(value, this.writePosition++);
		return this;
	}

	writeBytes(bytes, offset=0, length=0) {
		if (length === 0)
			length = bytes.length - offset;
		this.expand(length);
		for (let i=0; i < length; i++)
			this.buffer[i + this.writePosition] = bytes.buffer[i + offset];
		this.writePosition += length;
		return this;
	}

	writeInt(value) {
		this.expand(4);
		this.buffer[`writeInt32${this.endian}`](value, this.writePosition);
		this.writePosition += 4;
		return this;
	}

	writeMultiByte(value, charset='utf8') {
		this.writePosition += Buffer.byteLength(value);
		if (encodingExists(charset))
			this.buffer = Buffer.concat([this.buffer, encode(value, charset)]);
		else
			throw new Error(`Invalid character set '${charset}'`);
		return this;
	}

	writeShort(value) {
		this.expand(2);
		this.buffer[`writeInt16${this.endian}`](value, this.writePosition);
		this.writePosition += 2;
		return this;
	}

	writeUnsignedByte(value) {
		this.expand(1);
		this.buffer.writeUInt8(value, this.writePosition++);
		return this;
	}

	writeUnsignedInt(value) {
		this.expand(4);
		this.buffer[`writeUInt32${this.endian}`](value, this.writePosition);
		this.writePosition += 4;
		return this;
	}

	writeUnsignedShort(value) {
		this.expand(2);
		this.buffer[`writeUInt16${this.endian}`](value, this.writePosition);
		this.writePosition += 2;
		return this;
	}

	writeUTF(value) {
		return this.writeUnsignedShort(Buffer.byteLength(value)).writeMultiByte(value);
	}

	writeUTFBytes(value) {
		return this.writeMultiByte(value);
	}

	XXTEA(v, n, k) {
		let cycles = parseInt(6 + 52 / n),
			sum = BigInt(0),
			z = v[n-1];
		for (let i=0; i < cycles; i++) {
			sum = (sum + BigInt(0x9e3779b9)) & BigInt(0xffffffff);
			let e = sum >> BigInt(2) & BigInt(3);
			for (let p = 0; p < n; p++) {
				let y = v[(BigInt(p) + BigInt(1)) % BigInt(n)];
				z = v[p] = (BigInt(v[p]) + (
					((BigInt(z) >> BigInt(5) ^ BigInt(y) << BigInt(2)) + (BigInt(y) >> BigInt(3) ^ BigInt(z) << BigInt(4))) ^ ((BigInt(sum) ^ BigInt(y)) + (BigInt(k[parseInt((BigInt(p) & BigInt(3)) ^ BigInt(e))]) ^ BigInt(z)))
				)) & BigInt(0xffffffff);
			}
		}
		for (let p=0; p < n; p++)
			v[p] = parseInt(v[p]);
		return v
	}

	blockCipher(keys){
		var st = [...this.buffer];
		while (this.length < 8){
			st.push(0);
		}

		var packet = new ByteArray(st);
		var chunks = [];
		var length = packet.length;

		for (let i = 0; i < (4 - length%4); i++) {
			packet.writeByte(0)
		}

		while (length > 0) {
			chunks.push(packet.readUnsignedInt());
			length -= 4;
		}

		packet = new ByteArray();
		chunks = this.XXTEA(chunks, chunks.length, keys);
		packet.writeShort(chunks.length);

		for (let i = 0; i < chunks.length; i++) {
			const chunk = chunks[i];
			packet.writeUnsignedInt(chunk);
		}

		return packet;
	}

	xorCipher(keys, fingerprint){
		var p = [];

		for (let i = 0; i < this.buffer.length; i++) {
			const byte = this.buffer[i];
			fingerprint++;
			p[i] = (byte ^ keys[fingerprint % 20]) & 255;
		}
		return new ByteArray(p);
	}

}
module.exports = ByteArray;