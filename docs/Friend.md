# Friends's Documentation
Represents a friend from the friend list

#### Properties 
* [id](#id)
* [nickName](#nickName)
* [gender](#gender)
* [isSoulmate](#isSoulmate)
* [hasAddedBack](#hasAddedBack)
* [isConnected](#isConnected)
* [community](#community)
* [roomName](#roomName)
* [lastConnection](#lastConnection)
#### Methods 
* [read](#read)



# Properties 

### <a id=id></a>.id

>The player's id.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### <a id=nickName></a>.nickName

>The player's nickName.
>
>**Type:**  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
### <a id=gender></a>.gender

>The player's gender
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### <a id=isSoulmate></a>.isSoulmate

>If the player is the soulmate of the client
>
>**Type:**  [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
### <a id=hasAddedBack></a>.hasAddedBack

>If the player has added the client back
>
>**Type:**  [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
### <a id=isConnected></a>.isConnected

>If the player is connected
>
>**Type:**  [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
### <a id=community></a>.community

>The community of the player
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### <a id=roomName></a>.roomName

>The room name of the player (if they are online)
>
>**Type:**  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
### <a id=lastConnection></a>.lastConnection

>The player's last connection time
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)


# Methods

### <a id=read></a>Friend.read(packet, isSoulmate)

>Reads player data from a packet.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| packet |  [`ByteArray`](ByteArray.md) | The packet. |
>| isSoulmate | [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If the player is soulmate (located in the reserved space for the soulmate)
>
>
> **Return :**  [`Friend`](Friend.md) The friend
