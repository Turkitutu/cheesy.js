const ByteArray = require('./byteArray');

/** Represents a room. */
class Room {
	constructor(client, isPublic, name){
		/**
		 * The client.
		 * @type {Client}
		 */
		this.client = client;
		/**
		 * The room name.
		 * @type {String}
		 */
		this.name = name;
		/**
		 * All of the {@link Player} objects that are in the room.
		 * @type {Object}
		 */
		this.playerList = {};
		/**
		 * Whether or not the room is a public.
		 * @type {Boolean}
		 */
		this.isPublic = isPublic;
	}

	/**
	 * Get a player by the identifier and value.
	 * @param {String} identifier - The identifier.
	 * @param {(Number|String|Boolean)} value - The value.
	 * @example
	 * const player = client.room.getPlayer('nickname', 'Name#0000');
	 * console.log(player.look);
	 */
	getPlayer(identifier, value){
		if (identifier == 'pcode')
			return this.playerList[value];
		else if (identifier == 'name' || identifier == 'username' || identifier == 'nickname'){
			for (const i in Object.values(this.playerList)){
				const player = Object.values(this.playerList)[i];
				if (player[identifier] == value)
					return player;
			}
		}
	}

	/**
	 * Removes player the player from room playerlist.
	 * @param {Player} player - The player.
	 */
	removePlayer(player){
		if (player && this.playerList[player.pcode])
			delete this.playerList[player.pcode];
	}

	/**
	 * Adds or updates the player in room playerlist.
	 * @param {Player} player - The player.
	 */
	updatePlayer(player){
		this.playerList[player.pcode] = player;
	}

	/**
	 * Sends a message to the room.
	 * @param {String} message - The message.
	 */
	sendMessage(message){
		this.client.bulle.send(identifiers.roomMessage, new ByteArray().writeUTF(message), enums.cipherMethod.xor);
	}

}

module.exports = Room;