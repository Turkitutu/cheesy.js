# Client's Documentation
Represents a client that connects to Transformice.

#### Properties 
* [onlinePlayers](#onlinePlayers)
* [room](#room)
* [player](#player)
* [playerID](#playerID)
* [nickname](#nickname)
* [playingTime](#playingTime)
* [connectionTime](#connectionTime)
* [community](#community)
* [language](#language)
* [pcode](#pcode)
#### Methods 
* [handleOldPacket](#handleOldPacket)
* [handlePacket](#handlePacket)
* [handleTribulle](#handleTribulle)
* [sendTribullePacket](#sendTribullePacket)
* [login](#login)
* [sendHandshake](#sendHandshake)
* [setLanguage](#setLanguage)
* [joinTribeHouse](#joinTribeHouse)
* [loadLua](#loadLua)
* [sendRoomMessage](#sendRoomMessage)
* [sendCommand](#sendCommand)
* [joinRoom](#joinRoom)
* [sendWhisper](#sendWhisper)
* [requestFriendList](#requestFriendList)
* [startHeartbeat](#startHeartbeat)
* [start](#start)
* [disconnect](#disconnect)
#### Events
* [roomPlayerLeft](#roomPlayerLeft)
* [rawOldPacket](#rawOldPacket)
* [loginReady](#loginReady)
* [logged](#logged)
* [ready](#ready)
* [luaLog](#luaLog)
* [roomMessage](#roomMessage)
* [roomChange](#roomChange)
* [roomUpdate](#roomUpdate)
* [roomPlayerUpdate](#roomPlayerUpdate)
* [roomPlayerJoin](#roomPlayerJoin)
* [languageChange](#languageChange)
* [rawPacket](#rawPacket)
* [whisper](#whisper)
* [friendList](#friendList)
* [rawTribulle](#rawTribulle)
* [disconnect](#disconnect)
* [connect](#connect)



# Properties 

### <a id=onlineplayers></a>.onlinePlayers

>The online players when the bot log.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### <a id=room></a>.room

>The client's room.
>
>**Type:**  [`Room`](Room.md)
### <a id=player></a>.player

>The client's player.
>
>**Type:**  [`Player`](Player.md)
### <a id=playerid></a>.playerID

>The client's ID.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### <a id=nickname></a>.nickname

>The client's nickname.
>
>**Type:**  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
### <a id=playingtime></a>.playingTime

>The client's playing time.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### <a id=connectiontime></a>.connectionTime

>The connection time.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### <a id=community></a>.community

>The client's community code.
>
>**Type:**  [`enums.community`](Enums.md#community)
### <a id=language></a>.language

>The language suggested by the server.
>
>**Type:**  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
### <a id=pcode></a>.pcode

>The client's temporary code.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)


# Methods

### <a id=handleoldpacket></a>Client.handleOldPacket(connection, packet)

>Handles the old packets and emits events.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| connection |  [`Connection`](Connection.md) | The connection that received. |
>| packet |  [`ByteArray`](ByteArray.md) | The packet. |
>
### <a id=handlepacket></a>Client.handlePacket(connection, packet)

>Handles the known packets and emits events.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| connection |  [`Connection`](Connection.md) | The connection that received. |
>| packet |  [`ByteArray`](ByteArray.md) | The packet. |
>
### <a id=handletribulle></a>Client.handleTribulle(code, packet)

>Handles the community platform packets and emits events.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| code |  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The community platform code. |
>| packet |  [`ByteArray`](ByteArray.md) | The community platform packet. |
>
### <a id=sendtribullepacket></a>Client.sendTribullePacket(code, packet)

>Sends a packet to the community platform (tribulle).
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| code |  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The community platform code. |
>| packet |  [`ByteArray`](ByteArray.md) | The community platform packet. |
>
### <a id=login></a>Client.login(nickname, password, room)

>Log in to the game.
>
>**Parameters :**
>| Parameter | Type | Optional | Default | Description |
>| :-: | :-: | :-: | :-: | :-- |
>| nickname |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |  |  | The client nickname. |
>| password |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |  |  | The client password. |
>| room |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ✔ | "1" | The starting room. |
>
### <a id=sendhandshake></a>Client.sendHandshake(version, key)

>Sends Handshake.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| version |  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The version. |
>| key |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The Connection key. |
>
### <a id=setlanguage></a>Client.setLanguage(id)

>Sets the language of the client.
>
>**Parameters :**
>| Parameter | Type | Optional | Default | Description |
>| :-: | :-: | :-: | :-: | :-- |
>| id |  [`enums.language`](Enums.md#language) | ✔ | enums.language.en | The language iso code. |
>
### <a id=jointribehouse></a>Client.joinTribeHouse()

>Joins the tribe house.
>
### <a id=loadlua></a>Client.loadLua(script)

>Load a lua script in the room.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| script |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The script code. |
>
### <a id=sendroommessage></a>Client.sendRoomMessage(message)

>Sends a message to the client's room.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| message |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The message. |
>
### <a id=sendcommand></a>Client.sendCommand(message)

>Sends a server command.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| message |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The command message (without the `/`). |
>
### <a id=joinroom></a>Client.joinRoom(name, isSalonAuto)

>Sends a request to the server to join a room with specific name.
>
>**Parameters :**
>| Parameter | Type | Optional | Default | Description |
>| :-: | :-: | :-: | :-: | :-- |
>| name |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |  |  | The room name. |
>| isSalonAuto |  [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | ✔ | false | Whether the change room must be /salonauto or not. |
>
### <a id=sendwhisper></a>Client.sendWhisper(nickname, message)

>Sends a whisper message to a player.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| nickname |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The nickname of the player. |
>| message |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The message. |
>
### <a id=requestfriendlist></a>Client.requestFriendList()

>Request friend list.
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
>| api_tfmid |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Your Transformice id. |
>| api_token |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Your token. |
>
>
> **Return :**  [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)**<** [`void`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)**>**
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

### <a id=roomplayerleft></a>roomPlayerLeft

>Emitted when a player left the room. 
>
>**Properties :**
>| Property | Type | Description |
>| :-: | :-: | :-- |
>| player |  [`Player`](Player.md) | The player who left. |
>
### <a id=rawoldpacket></a>rawOldPacket

>Emitted when a new old packet received.
>
>**Properties :**
>| Property | Type | Description |
>| :-: | :-: | :-- |
>| connection |  [`Connection`](Connection.md) | The connection which sent the packet (`main` or `bulle`). |
>| ccc |  [`enums.oldIdentifiers`](Enums.md#oldIdentifiers) | The old identifier code of the packet. |
>| data |  [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | The data. |
>
### <a id=loginready></a>loginReady

>Emitted when the client can login on the game. 
>
### <a id=logged></a>logged

>Emitted when the client has logged in. 
>
>**Properties :**
>| Property | Type | Description |
>| :-: | :-: | :-- |
>| nickname |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The display nickname. |
>| pcode |  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The client's code. |
>
### <a id=ready></a>ready

>Emitted when the client is connected to the community platform.
>
### <a id=lualog></a>luaLog

>Emitted when the client receives lua logs or errors from `#Lua` chat.
>
>**Properties :**
>| Property | Type | Description |
>| :-: | :-: | :-- |
>| message |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | a log message |
>
### <a id=roommessage></a>roomMessage

>Emitted when a player sends a message in the room.
>
>**Properties :**
>| Property | Type | Description |
>| :-: | :-: | :-- |
>| message |  [`RoomMessage`](RoomMessage.md) | The message. |
>
### <a id=roomchange></a>roomChange

>Emitted when the room is changed. 
>
>**Properties :**
>| Property | Type | Description |
>| :-: | :-: | :-- |
>| before |  [`Room`](Room.md) | The old room. |
>| after |  [`Room`](Room.md) | The new room. |
>
>
> **Example :**
 >```js
>client.on('roomChange', (before, after) => {
>	console.log('The room changed from '+before.name+' to '+after.name);
>})
>```
### <a id=roomupdate></a>roomUpdate

>Emitted when the room playerList is updated. 
>
>**Properties :**
>| Property | Type | Description |
>| :-: | :-: | :-- |
>| before |  [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | The old playerList. |
>| after |  [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | The new playerList. |
>
### <a id=roomplayerupdate></a>roomPlayerUpdate

>Emitted when the room playerList is updated. 
>
>**Properties :**
>| Property | Type | Description |
>| :-: | :-: | :-- |
>| before |  [`Player`](Player.md) | Old player data. |
>| after |  [`Player`](Player.md) | New player data. |
>
### <a id=roomplayerjoin></a>roomPlayerJoin

>Emitted when a new player has joined. 
>
>**Properties :**
>| Property | Type | Description |
>| :-: | :-: | :-- |
>| player |  [`Player`](Player.md) | The player. |
>
### <a id=languagechange></a>languageChange

>Emitted when a language is changed.
>
>**Properties :**
>| Property | Type | Description |
>| :-: | :-: | :-- |
>| language |  [`enums.language`](Enums.md#language) | The iso code of the language. |
>| country |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The code of the country. |
>| readRight |  [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Whether the language is read left to right or not. |
>| readSpecialChar |  [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Whether the language has special characters or not. |
>
### <a id=rawpacket></a>rawPacket

>Emitted when a new packet received from main or bulle connection.
>
>**Properties :**
>| Property | Type | Description |
>| :-: | :-: | :-- |
>| connection |  [`Connection`](Connection.md) | The connection which sent the packet (`main` or `bulle`). |
>| ccc |  [`enums.identifiers`](Enums.md#identifiers) | The identifier code of the packet. |
>| packet |  [`ByteArray`](ByteArray.md) | The packet. |
>
### <a id=whisper></a>whisper

>Emitted when a player sends a whisper message to the client.
>
>**Properties :**
>| Property | Type | Description |
>| :-: | :-: | :-- |
>| message |  [`WhisperMessage`](WhisperMessage.md) | The message. |
>
### <a id=friendlist></a>friendList

>Emmitted when the client received the friend list
>
>**Properties :**
>| Property | Type | Description |
>| :-: | :-: | :-- |
>| friends |  [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**<** [`Friend`](Friend.md)**>** | An array of friends |
>| soulmate |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) [`Null`](Null.md) | The name of the soulmate, `null` if absent |
>
### <a id=rawtribulle></a>rawTribulle

>Emitted when a new community platform packet received.
>
>**Properties :**
>| Property | Type | Description |
>| :-: | :-: | :-- |
>| code |  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The community platform code. |
>| packet |  [`ByteArray`](ByteArray.md) | The packet. |
>
### <a id=disconnect></a>disconnect

>Emitted when the client has disconnect. 
>
### <a id=connect></a>connect

>Emitted when a connection is successfully connected. 
>
>**Properties :**
>| Property | Type | Description |
>| :-: | :-: | :-- |
>| connection |  [`Connection`](Connection.md) | The connection which has connected. |
>
