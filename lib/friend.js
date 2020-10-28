const utils = require("./utils");

/** Represents a friend from the friend list */
class Friend {

	constructor() {
		/**
		 * The player's id
		 * @type {number}
		 */
		this.id = 0;
		/**
		 * The player's nickname
		 * @type {string}
		 */
		this.nickName = '';
		/**
		 * The player's gender
		 * @type {number}
		 */
		this.gender = 0;
		/**
		 * If the player is the soulmate of the client
		 * @type {boolean}
		 */
		this.isSoulmate = false;
		/**
		 * If the player has added the client back
		 * @type {boolean}
		 */
		this.hasAddedBack = false;
		/**
		 * If the player is connected
		 * @type {boolean}
		 */
		this.isConnected = false;
		/**
		 * The community of the player
		 * @type {number}
		 */
		this.community = 0;
		/**
		 * The room name of the player (if they are online)
		 * @type {string}
		 */
		this.roomName = '';
		/**
		 * The player's last connection time
		 * @type {number}
		 */
		this.lastConnection = 0;
	}

	/**
	 * Returns friend data from a packet
	 * @param {ByteArray} packet - The packet
	 * @param {Boolean} isSoulmate - If the player is soulmate (located in the reserved space for the soulmate)
	 * @returns {Friend} - the friend
	 */
	read(packet, isSoulmate){
		this.id = packet.readInt();
		this.nickName = utils.toNickname(packet.readUTF());
		this.gender = packet.readByte();
		packet.readInt(); // ?
		this.isSoulmate = isSoulmate;
		this.hasAddedBack = packet.readBoolean();
		this.isConnected = packet.readBoolean();
		this.community = packet.readInt();
		this.roomName = packet.readUTF();
		this.lastConnection = packet.readInt();
		return this;
	}

}        

module.exports = Friend;