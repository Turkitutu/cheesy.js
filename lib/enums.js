var enums = {};

Identifier = (c, cc) => {
	return (c << 8) | cc;
}

/** The identifiers of the packets. */
enums.identifiers = {
	oldPacket      : Identifier(  1,  1 ),
	bulle          : Identifier( 60,  3 ),
	bulleConnection: Identifier( 44,  1 ),
	cafeData       : Identifier( 30, 40 ),
	cafeState      : Identifier( 30, 45 ),
	cafeLike       : Identifier( 30, 46 ),
	cafeLoadData   : Identifier( 30, 41 ),
	cafeNewTopic   : Identifier( 30, 44 ),
	cafeSendMessage: Identifier( 30, 43 ),
	command        : Identifier(  6, 26 ),
	logged         : Identifier( 26,  2 ),
	handshakeOk    : Identifier( 26,  3 ),
	emote          : Identifier(  8,  1 ),
	emoticon       : Identifier(  8,  5 ),
	heartbeat      : Identifier( 26, 26 ),
	handshake      : Identifier( 28,  1 ),
	loginReady     : Identifier( 28, 62 ),
	joinTribeHouse : Identifier( 16,  1 ),
	loadLua        : Identifier( 29,  1 ),
	luaChatLog     : Identifier( 29,  6 ),
	loginSend      : Identifier( 26,  8 ),
	modList        : Identifier( 26,  5 ),
	os             : Identifier( 28, 17 ),
	fingerprint    : Identifier( 44, 22 ),
	room           : Identifier(  5, 38 ),
	roomList       : Identifier( 26, 35 ),
	roomMessage    : Identifier(  6,  6 ),
	roomChange     : Identifier(  5, 21 ),
	roomPlayerList : Identifier(144,  1 ),
	roomNewPlayer  : Identifier(144,  2 ),
	language       : Identifier(176,  1 ),
	languageChange : Identifier(176,  2 ),
	requestLanguage: Identifier(176,  5 ),
};

/** The old identifiers of the packets. */
enums.oldIdentifiers = {
	roomPlayerLeft  : Identifier( 08, 07 )
};

/** The available communities based on the languages. */
enums.language = {
	es : "es",
	af : "af",
	az : "az",
	id : "id",
	ms : "ms",
	bi : "bi",
	bs : "bs",
	ca : "ca",
	ny : "ny",
	da : "da",
	de : "de",
	et : "et",
	na : "na",
	en : "en",
	to : "to",
	mg : "mg",
	fr : "fr",
	sm : "sm",
	hr : "hr",
	it : "it",
	mh : "mh",
	kl : "kl",
	rn : "rn",
	rw : "rw",
	sw : "sw",
	ht : "ht",
	lv : "lv",
	lt : "lt",
	lb : "lb",
	hu : "hu",
	mt : "mt",
	nl : "nl",
	no : "no",
	uz : "uz",
	pl : "pl",
	pt : "pt",
	br : "br",
	ro : "ro",
	qu : "qu",
	st : "st",
	tn : "tn",
	sq : "sq",
	ss : "ss",
	sk : "sk",
	sl : "sl",
	so : "so",
	fi : "fi",
	sv : "sv",
	tl : "tl",
	vi : "vi",
	tk : "tk",
	tr : "tr",
	fj : "fj",
	wo : "wo",
	yo : "yo",
	is : "is",
	cs : "cs",
	el : "el",
	be : "be",
	ky : "ky",
	mn : "mn",
	ru : "ru",
	sr : "sr",
	tg : "tg",
	uk : "uk",
	bg : "bg",
	kk : "kk",
	hy : "hy",
	he : "he",
	ur : "ur",
	ar : "ar",
	fa : "fa",
	dv : "dv",
	ne : "ne",
	hi : "hi",
	bn : "bn",
	ta : "ta",
	th : "th",
	lo : "lo",
	dz : "dz",
	my : "my",
	ka : "ka",
	ti : "ti",
	am : "am",
	km : "km",
	cn : "cn",
	zh : "zh",
	ja : "ja",
	ko : "ko"
}

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
