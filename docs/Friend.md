# Friend's Documentation
Represents a player from the room.

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

>The player's id
>
>**Type:**  [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)
### <a id=nickname></a>.nickName

>The player's nickname
>
>**Type:**  [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)
### <a id=gender></a>.gender

>The player's gender
>
>**Type:**  [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)
### <a id=issoulmate></a>.isSoulmate

>If the player is the soulmate of the client
>
>**Type:**  [`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)
### <a id=hasaddedback></a>.hasAddedBack

>If the player has added the client back
>
>**Type:**  [`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)
### <a id=isconnected></a>.isConnected

>If the player is connected
>
>**Type:**  [`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)
### <a id=community></a>.community

>The community of the player
>
>**Type:**  [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)
### <a id=roomname></a>.roomName

>The room name of the player (if they are online)
>
>**Type:**  [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)
### <a id=lastconnection></a>.lastConnection

>The player's last connection time
>
>**Type:**  [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)


# Methods

### <a id=read></a>Friend.read(packet, isSoulmate)

>Returns friend data from a packet
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| packet |  [`ByteArray`](ByteArray.md) | The packet |
>| isSoulmate |  [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If the player is soulmate (located in the reserved space for the soulmate) |
>
>
> **Return :**  [`Friend`](Friend.md) the friend
