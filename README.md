# cheesy.js

cheesy is an NodeJs client for  [Transformice](https://www.transformice.com/) that allows developers to make bots easily.
It uses an API endpoint to get the keys needed to connect to the game.

Join the **_[Fifty Shades of Lua](https://discord.gg/qmdryEB)_** [discord](https://discordapp.com/) server to discuss about this API and to receive special support.

## Authentication  Keys Endpoint

This API depends on an [endpoint](https://api.tocu.tk/get_transformice_keys.php) that gives you access to the Transformice encryption keys.

To use it you will need a token which you can get by [applying through this form](https://forms.gle/N6Et1hLGQ9hmg95F6). See below to know the names of Transfromage managers who handle the token system.
- **[Tocutoeltuco](https://github.com/Tocutoeltuco)** @discord=> `Tocutoeltuco#0018` <sub>`212634414021214209`</sub>;
- **[Blank3495](https://github.com/Blank3495)** @discord=> `󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪#8737` <sub>`436703225140346881`</sub>;
- **[Bolodefchoco](https://github.com/Lautenschlager-id)** @discord=> `Lautenschlager#2555` <sub>`285878295759814656`</sub>.

## Installation

You can install cheesy.js using npm:
`npm install cheesy.js`

![/!\\](https://i.imgur.com/HQ188PK.png) **Versions under 2.0.6 are no longer working due to internal changes of the game.**<br>

## Example

```js
const cheesyjs = require('cheesy.js');

const client = new cheesyjs();

client.on('loginReady', () => {
	client.setLanguage(cheesyjs.enums.language.en);
	client.login('nickname', 'password', "roomName");
});

client.on('roomMessage', (message) => {
    if (client.nickname == message.author.nickname)
		return;
	client.sendRoomMessage(message.author.look);
});

client.start("api_tfmid", "api_token");
```
