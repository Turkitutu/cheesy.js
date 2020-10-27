/** Represents a player from the room. */
class Player {
	constructor() {
		/**
		 * The player's nickname.
		 * @type {String}
		 */
		this.nickname = '';
		/**
		 * The player's gender.
		 * @type {Number}
		 */
		this.gender = 0;
		/**
		 * The current items and customisation of the player’s outfit as `1;0,0,0,0,0,0,0,0,0`.
		 * @type {String}
		 */
		this.look = '';
		/**
		 * The player's temporary code.
		 * @type {Number}
		 */
		this.pcode = 0;
		/**
		 * The player's title ID.
		 * @type {Number}
		 */
		this.title = 0;
		/**
		 * How many stars in the title.
		 * @type {Number}
		 */
		this.titleStars = 0;

		/**
		 * Whether or not the player has a cheese.
		 * @type {Boolean}
		 */
		this.hasCheese = false;
		/**
		 * Whether or not the player is dead.
		 * @type {Boolean}
		 */
		this.isDead = false;
		/**
		 * Whether or not the player is shaman.
		 * @type {Boolean}
		 */
		this.isShaman = false;
		/**
		 * Whether or not the player is vampire.
		 * @type {Boolean}
		 */
		this.isVampire = false;
		/**
		 * The player's score.
		 * @type {Number}
		 */
		this.score = 0;

		/**
		 * The player's mouse color.
		 * @type {Number}
		 */
		this.mouseColor = 0;
		/**
		 * The player's name color, By default : `-1`.
		 * @type {Number}
		 */
		this.nameColor = -1;
		/**
		 * The player's shaman color.
		 * @type {Number}
		 */
		this.shamanColor = 0;

		/**
		 * Whether or not the player is facing right.
		 * @type {Boolean}
		 */
		this.facingRight = true;
		/**
		 * Whether or not the player is moving left.
		 * @type {Boolean}
		 */
		this.movingLeft = false;
		/**
		 * Whether or not the player is moving right.
		 * @type {Boolean}
		 */
		this.movingRight = false;

		/**
		 * The player’s X coordinate.
		 * @type {Number}
		 */
		this.x = 0;
		/**
		 * The player’s Y coordinate.
		 * @type {Number}
		 */
		this.y = 0;
		/**
		 * The player’s X velocity.
		 * @type {Number}
		 */
		this.vx = 0;
		/**
		 * The player’s Y velocity.
		 * @type {Number}
		 */
		this.vy = 0;

		/**
		 * Whether or not the player is in the air.
		 * @type {Number}
		 */
		this.isJumping = false;
	}

	/**
	 * Reads player data from a packet.
	 * @param {ByteArray} packet - The packet.
	 * @returns {Player} - The player
	 */
	read(packet){

		this.nickname = packet.readUTF();
		this.pcode = packet.readUnsignedInt();
		this.isShaman = packet.readBoolean();
		this.isDead = packet.readBoolean();
		this.score = packet.readUnsignedShort();
		this.hasCheese = packet.readBoolean();
		this.title = packet.readUnsignedShort();
		this.titleStars = packet.readByte() - 1;
		this.gender = packet.readByte();

		packet.readUTF(); // Unknown string
		this.look = packet.readUTF();
		packet.readBoolean(); // Unknown boolean
		this.mouseColor = packet.readUnsignedInt();
		this.shamanColor = packet.readUnsignedInt();
		packet.readUnsignedInt(); // Unknown int
		this.color = packet.readUnsignedInt();
		this.nameColor = this.color == 0xFFFFFFFF ? -1 : this.color;
		return this;
	}

}


module.exports = Player;