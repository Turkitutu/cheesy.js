
/** Represents a message in the chat.*/
class ChatMessage {
	constructor(client, chat, author, community, content){
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
		 * @type {Player}
		 */
		this.author = author;
		 /**
		  * The chat of the message.
		  * @type {Chat}
		 */
		this.chat = chat;
		/**
		 * The author's community ID.
		 * @type {enums.chatCommunity}
		 */
		 this.community = community;
	}

	/**
	 * Reply the author with a message.
	 * @param {String} content - The content of the message.
	 */
	reply(message){
		return this.chat.send(`@${this.author} ${content}`);
	}
}

module.exports = ChatMessage;