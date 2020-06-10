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
* [pcode](#pcode)
#### Methods 
* [handlePacket](#handlePacket)
* [login](#login)
* [sendHandshake](#sendHandshake)
* [setCommunity](#setCommunity)
* [joinTribeHouse](#joinTribeHouse)
* [loadLua](#loadLua)
* [sendRoomMessage](#sendRoomMessage)
* [startHeartbeat](#startHeartbeat)
* [start](#start)
* [disconnect](#disconnect)
#### Events
* [loginReady](#loginReady)
* [logged](#logged)
* [ready](#ready)
* [luaLog](#luaLog)
* [roomMessage](#roomMessage)
* [roomChange](#roomChange)
* [roomUpdate](#roomUpdate)
* [roomPlayerUpdate](#roomPlayerUpdate)
* [roomPlayerJoin](#roomPlayerJoin)
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
### <a id=pcode></a>.pcode

>The client's temporary code.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)


# Methods

### <a id=handlepacket></a>Client.handlePacket(connection, packet)

>Handles the known packets and emits events.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| connection |  [`Connection`](Connection.md) | The connection that received. |
>| packet |  [`ByteArray`](Bytearray.md) | The packet. |
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
### <a id=setcommunity></a>Client.setCommunity(id)

>Sets the community of the bot.
>
>**Parameters :**
>| Parameter | Type | Optional | Default | Description |
>| :-: | :-: | :-: | :-: | :-- |
>| id |  [`enums.community`](Enums.md#community) | ✔ | enums.community.en | The community id. |
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

>Emitted when the client is connected to the community platform.
>
>**Properties :**
>| Property | Type | Description |
>| :-: | :-: | :-- |
>| player |  [`Player`](Player.md) | The player who sent the message. |
>| community |  [`enums.chatCommunity`](Enums.md#chatCommunity) | The player's community. |
>| message |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The message content. |
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
