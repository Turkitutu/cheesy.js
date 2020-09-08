# Room's Documentation
Represents a room.

#### Properties 
* [client](#client)
* [name](#name)
* [playerList](#playerList)
* [isPublic](#isPublic)
#### Methods 
* [getPlayer](#getPlayer)
* [removePlayer](#removePlayer)
* [updatePlayer](#updatePlayer)
* [sendMessage](#sendMessage)



# Properties 

### <a id=client></a>.client

>The client.
>
>**Type:**  [`Client`](Client.md)
### <a id=name></a>.name

>The room name.
>
>**Type:**  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
### <a id=playerlist></a>.playerList

>All of the [Player](player.md) objects that are in the room.
>
>**Type:**  [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
### <a id=ispublic></a>.isPublic

>Whether or not the room is a public.
>
>**Type:**  [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)


# Methods

### <a id=getplayer></a>Room.getPlayer(identifier, value)

>Get a player by the identifier and value.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| identifier |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The identifier. |
>| value |  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | The value. |
>
>
> **Return :**  [`Player`](Player.md)
>
> **Example :**
 >```js
>const player = client.room.getPlayer('nickname', 'Name#0000');
>console.log(player.look);
>```
### <a id=removeplayer></a>Room.removePlayer(player)

>Removes player the player from room playerlist.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| player |  [`Player`](Player.md) | The player. |
>
### <a id=updateplayer></a>Room.updatePlayer(player)

>Adds or updates the player in room playerlist.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| player |  [`Player`](Player.md) | The player. |
>
### <a id=sendmessage></a>Room.sendMessage(message)

>Sends a message to the room.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| message |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The message. |
>
