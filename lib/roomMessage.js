/** Represents a room message. */
class RoomMessage {
	constructor(client, author, content){
		/**
		 * The client.
		 * @type {Client}
		 */
		this.client = client;
		/**
		 * The author's message.
		 * @type {String}
		 */
		this.content = content;
		/**
		 * The author.
		 * @type {Player}
		 */
		this.author = author;
	}

	/**
	 * Reply the author with a message.
	 * @param {String} message - The message.
	 * @example
	 * client.on('roomMessage', (message) => {
	 * 	if (client.nickname == message.author.nickname)
	 * 		return;
	 * 	message.reply('Hello');
	 * }
	 */
	reply(message){
		this.client.sendRoomMessage(`@${this.author.nickname} ${message}`);
	}
}

module.exports = RoomMessage;