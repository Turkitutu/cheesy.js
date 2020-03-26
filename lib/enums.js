class Enums {

    constructor(values, ignoreOverwrites = true) {
        this.values = Object.freeze(values);
        for (let key of Object.keys(this.values)) {
            Object.defineProperty(this, key, {
                
                get() {
                    return this.values[key];
                },

                set(value) {
                    if (!ignoreOverwrites) throw new Error("Attempting assignments on enum objects");
                }

            });
        }
    }

}

Enums.chatCommunity = new Enums({
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
});

Enums.community = new Enums({
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
});

Enums.emote = new Enums({
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
});

Enums.emoticon = new Enums({
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
});

Enums.errorLevel = new Enums({
	low : -2,
	high: -1
});

Enums.game = new Enums({
	unknown     : 00,
	none        : 01,
	transformice: 04,
	fortoresse  : 06,
	bouboum     : 07,
	nekodancer  : 15,
	deadmaze    : 17
});

Enums.gender = new Enums({
	none  : 0,
	female: 1,
	male  : 2
});

Enums.identifier = new Enums({
	bulle          : new Enums([ 60, 03 ]),
	bulleConnection: new Enums([ 44, 01 ]),
	cafeData       : new Enums([ 30, 40 ]),
	cafeState      : new Enums([ 30, 45 ]),
	cafeLike       : new Enums([ 30, 46 ]),
	cafeLoadData   : new Enums([ 30, 41 ]),
	cafeNewTopic   : new Enums([ 30, 44 ]),
	cafeSendMessage: new Enums([ 30, 43 ]),
	command        : new Enums([ 06, 26 ]),
	community      : new Enums([ 08, 02 ]),
	correctVersion : new Enums([ 26, 03 ]),
	emote          : new Enums([ 08, 01 ]),
	emoticon       : new Enums([ 08, 05 ]),
	heartbeat      : new Enums([ 26, 26 ]),
	initialize     : new Enums([ 28, 01 ]),
	joinTribeHouse : new Enums([ 16, 01 ]),
	loadLua        : new Enums([ 29, 01 ]),
	loginSend      : new Enums([ 26, 08 ]),
	modList        : new Enums([ 26, 05 ]),
	os             : new Enums([ 28, 17 ]),
	packetOffset   : new Enums([ 44, 22 ]),
	room           : new Enums([ 05, 38 ]),
	roomList       : new Enums([ 26, 35 ]),
	roomMessage    : new Enums([ 06, 06 ]),
});

Enums.language = new Enums({
	en: "en",
	fr: "fr",
	ru: "ru",
	br: "br",
	es: "es",
	cn: "cn",
	tr: "tr",
	vk: "vk",
	pl: "pl",
	hu: "hu",
	nl: "nl",
	ro: "ro",
	id: "id",
	de: "de",
	ar: "ar",
	ph: "ph",
	lt: "lt",
	jp: "jp",
	ch: "ch",
	fi: "fi",
	cz: "cz",
	sk: "sk",
	hr: "hr",
	bg: "bg",
	lv: "lv",
	he: "he",
	it: "it",
	et: "et",
	az: "az",
	pt: "pt"
});

Enums.role = new Enums({
	normal       : 00,
	moderator    : 05,
	administrator: 10,
	mapcrew      : 11,
	funcorp      : 13
});

Enums.roomMode = new Enums({
	normal   : 01,
	bootcamp : 02,
	vanilla  : 03,
	survivor : 08,
	racing   : 09,
	music    : 10,
	defilante: 11,
	village  : 16,
	module   : 18
});

Enums.setting = new Enums({
	mainIp: "94.23.193.229",
	port  : new Enums([ 13801, 11801, 12801, 14801 ])
});

Enums.whisperState = new Enums({
	enabled       : 1,
	disabledPublic: 2,
	disabledAll   : 3
});


module.exports = Enums;
