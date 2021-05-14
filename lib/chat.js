const ByteArray = require('./byteArray'),
	chatMessage = require('./chatMessage'),
	utils = require('./utils');

/** Represents a #chat in the game. */
class Chat {
	constructor(client, name){
		/**
		 * The client.
		 * @type {Client}
		 */
		this.client = client;
		/**
		 * The chat's name.
		 * @type {String}
		 */
		this.name = name;
	}

	/**
	 * Sends the command /who to the chat and returns the list of players.
	 * @returns {Promise<Array>} - The list of player names.
	*/
	async who(){
		const id = this.client.sendTribullePacket(58, new ByteArray().writeUTF(this.name));
		return new Promise((resolve, reject) => {
			const c = (code, packet) => {
				if (code == 59){
					this.client.off('rawTribulle', c);
					if (packet.readUnsignedInt() == id){
						packet.readByte();
						const players = [];
						const size = packet.readUnsignedShort();
						for (let i = 0; i < size; i++)
							players.push(utils.toNickname(packet.readUTF()));
						resolve(players);
						
					}
				}
			}
			this.client.on('rawTribulle', c);
		});
	}

	/**
	 * Leaves the chat.
	*/
	leave(){
		this.client.leaveChat(this.name);
	}

	/**
	 * Sends a message to the chat.
	 * @param {String} content - The content of the message.
	 * @returns {Chat} - The chat.
	*/
	send(content){
		const c = new ChatMessage(this.client, this, this.client.nickname, content);
		this.client.sendTribullePacket(48, new ByteArray().writeUTF(this.name).writeUTF(content));
		return c;
	}
}


module.exports = Chat;