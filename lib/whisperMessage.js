/** Represents a message. */
class WhisperMessage {
	constructor(client, author, community, sentTo, content){
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
		 * The author's nickname.
		 * @type {String}
		 */
        this.author = author;
		/**
		 * The player name who sent to them.
		 * @type {String}
		 */
		this.sentTo = sentTo;
		/**
		 * The author's community ID.
		 * @type {enums.chatCommunity}
		 */
		this.community = community;
	}

	/**
	 * Reply the author with a whisper message.
	 * @param {String} message - The message.
	 * @example
	 * client.on('whisper', (message) => {
	 * 	if (client.nickname == message.author)
	 * 		return;
	 * 	message.reply('Hello');
	 * }
	 */
	reply(message){
		this.client.sendWhisper(this.author, `${message}`);
	}
}

module.exports = WhisperMessage;