var enums = {};

Identifier = (c, cc) => {
	return (c << 8) | cc;
}

/** The identifiers of the packets. */
enums.identifiers = {
	bulle          : Identifier( 60, 03 ),
	bulleConnection: Identifier( 44, 01 ),
	cafeData       : Identifier( 30, 40 ),
	cafeState      : Identifier( 30, 45 ),
	cafeLike       : Identifier( 30, 46 ),
	cafeLoadData   : Identifier( 30, 41 ),
	cafeNewTopic   : Identifier( 30, 44 ),
	cafeSendMessage: Identifier( 30, 43 ),
	command        : Identifier( 06, 26 ),
	community      : Identifier( 08, 02 ),
	logged         : Identifier( 26, 02 ),
	correctVersion : Identifier( 26, 03 ),
	emote          : Identifier( 08, 01 ),
	emoticon       : Identifier( 08, 05 ),
	heartbeat      : Identifier( 26, 26 ),
	handshake      : Identifier( 28, 01 ),
	loginReady     : Identifier( 28, 62 ),
	joinTribeHouse : Identifier( 16, 01 ),
	loadLua        : Identifier( 29, 01 ),
	loginSend      : Identifier( 26, 08 ),
	modList        : Identifier( 26, 05 ),
	os             : Identifier( 28, 17 ),
	fingerprint    : Identifier( 44, 22 ),
	room           : Identifier( 05, 38 ),
	roomList       : Identifier( 26, 35 ),
	roomMessage    : Identifier( 06, 06 ),
	roomChange     : Identifier( 06, 06 )
};

/** The ids of all chat communities */
enums.chatCommunity = {
	en: 01,
	fr: 02,
	ru: 03,
	br: 04,
	es: 05,
	cn: 06,
	tr: 07,
	vk: 08,
	pl: 09,
	hu: 10,
	nl: 11,
	ro: 12,
	id: 13,
	de: 14,
	e2: 15,
	ar: 16,
	ph: 17,
	lt: 18,
	jp: 19,
	ch: 20,
	fi: 21,
	cz: 22,
	hr: 23,
	sk: 24,
	bg: 25,
	lv: 26,
	he: 27,
	it: 28,
	et: 29,
	az: 30,
	pt: 31
};

/** The ids of all communities */
enums.community = {
	en: 00,
	fr: 01,
	ru: 02,
	br: 03,
	es: 04,
	cn: 05,
	tr: 06,
	vk: 07,
	pl: 08,
	hu: 09,
	nl: 10,
	ro: 11,
	id: 12,
	de: 13,
	e2: 14,
	ar: 15,
	ph: 16,
	lt: 17,
	jp: 18,
	ch: 19,
	fi: 20,
	cz: 21,
	sk: 22,
	hr: 23,
	bg: 24,
	lv: 25,
	he: 26,
	it: 27,
	et: 29,
	az: 30,
	pt: 31
};

/** The ids of all emotes */
enums.emote = {
	dance              : 00,
	laugh              : 01,
	cry                : 02,
	kiss               : 03,
	angry              : 04,
	clap               : 05,
	sleep              : 06,
	facepaw            : 07,
	sit                : 08,
	confetti           : 09,
	flag               : 10,
	marshmallow        : 11,
	selfie             : 12,
	highfive           : 13,
	highfive_1         : 14,
	highfive_2         : 15,
	partyhorn          : 16,
	hug                : 17,
	hug_1              : 18,
	hug_2              : 19,
	jigglypuff         : 20,
	kissing            : 21,
	kissing_1          : 22,
	kissing_2          : 23,
	carnaval           : 24,
	rockpaperscissors  : 25,
	rockpaperscissors_1: 26,
	rockpaperscissor_2 : 27
};

/** the ids of all the smiles. */
enums.smile = {
	smiley   : 0,
	sad      : 1,
	tongue   : 2,
	angry    : 3,
	laugh    : 4,
	shades   : 5,
	blush    : 6,
	sweatdrop: 7,
	derp     : 8,
	OMG      : 9
};

/** The ids of all Atelier801's games. */
enums.game = {
	unknown     : 00,
	none        : 01,
	transformice: 04,
	fortoresse  : 06,
	bouboum     : 07,
	nekodancer  : 15,
	deadmaze    : 17
};

/** The ids of all the genders. */
enums.gender = {
	none  : 0,
	female: 1,
	male  : 2
};


/** The ids of all the staff roles. */
enums.role = {
	normal       : 00,
	moderator    : 05,
	administrator: 10,
	mapcrew      : 11,
	funcorp      : 13
};

/** The ids of all the room modes. */
enums.roomMode = {
	normal   : 01,
	bootcamp : 02,
	vanilla  : 03,
	survivor : 08,
	racing   : 09,
	music    : 10,
	defilante: 11,
	village  : 16,
	module   : 18
};

/** The ids of all the whisper states. */
enums.whisperState = {
	enabled       : 1,
	disabledPublic: 2,
	disabledAll   : 3
};

/** The ids of the cipher method. */
enums.cipherMethod = {
	none     : 0,
	xor      : 1,
	xxtea    : 2
};

module.exports = enums;
