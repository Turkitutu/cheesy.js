# Client's Documentation
Represents a client that connects to Transformice.

#### Methods 
* [handlePacket](#handlePacket)
* [login](#login)
* [sendHandshake](#sendHandshake)
* [setCommunity](#setCommunity)
* [joinTribeHouse](#joinTribeHouse)
* [sendRoomMessage](#sendRoomMessage)
* [startHeartbeat](#startHeartbeat)
* [start](#start)
* [disconnect](#disconnect)
#### Events
* [loginReady](#loginReady)
* [logged](#logged)
* [ready](#ready)
* [roomMessage](#roomMessage)
* [roomChange](#roomChange)



# Methods

### <a id=handlepacket></a>Client.handlePacket(connection, packet)

>Handles the known packets and emits events.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| connection | [`Connection`](Connection.md) | The connection that received. |
>| packet | [`ByteArray`](Bytearray.md) | The packet. |
>
### <a id=login></a>Client.login(nickname, password, room)

>Log in to the game.
>
>**Parameters :**
>| Parameter | Type | Optional | Default | Description |
>| :-: | :-: | :-: | :-: | :-- |
>| nickname | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |  |  | The client nickname. |
>| password | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |  |  | The client password. |
>| room | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ✔ | "1" | The starting room. |
>
### <a id=sendhandshake></a>Client.sendHandshake(version, key)

>Sends Handshake.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| version | [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The version. |
>| key | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The Connection key. |
>
### <a id=setcommunity></a>Client.setCommunity(id)

>Sets the community of the bot.
>
>**Parameters :**
>| Parameter | Type | Optional | Default | Description |
>| :-: | :-: | :-: | :-: | :-- |
>| id | [`enums.community`](Enums.md#community) | ✔ | enums.community.en | The community id. |
>
### <a id=jointribehouse></a>Client.joinTribeHouse()

>Joins the tribe house.
>
### <a id=sendroommessage></a>Client.sendRoomMessage(message)

>Sends a message to the client's room.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| message | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The message. |
>
### <a id=startheartbeat></a>Client.startHeartbeat()

>Sends a packet every 15 seconds to stay connected to the game.
>
### <a id=start></a>Client.start(api_tfmid, api_token)

>Starts the client.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| api_tfmid | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Your Transformice id. |
>| api_token | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Your token. |
>
### <a id=disconnect></a>Client.disconnect()

>Disconnects the client.
>


# Events


 **How to use an event :**
 ```js
client.on('eventName', (property) => {
	// Your code
}
```

### <a id=loginready></a>loginReady

>Emitted when the client can login on the game. 
>
### <a id=logged></a>logged

>Emitted when the client has logged in. 
>
>**Properties :**
>| Property | Type | Description |
>| :-: | :-: | :-- |
>| nickname | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The display nickname. |
>| pcode | [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The client's code. |
>
### <a id=ready></a>ready

>Emitted when the client is connected to the community platform.
>
### <a id=roommessage></a>roomMessage

>Emitted when the client is connected to the community platform.
>
>**Properties :**
>| Property | Type | Description |
>| :-: | :-: | :-- |
>| playerName | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The player who sent the message. |
>| pcode | [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The player's code. |
>| community | [`enums.chatCommunity`](Enums.md#chatCommunity) | The player's community. |
>| message | [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The message content. |
>
### <a id=roomchange></a>roomChange

>Emitted when the room is changed. 
>
>**Properties :**
>| Property | Type | Description |
>| :-: | :-: | :-- |
>| before | [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | The old room. |
>| after | [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | The new room. |
>
>
> **Example :**
 >```js
>client.on('roomChange', (before, after) => {
>	console.log('The room changed from '+before.name+' to '+after.name);
>})
>```
