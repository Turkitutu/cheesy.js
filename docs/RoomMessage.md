# RoomMessage's Documentation
Represents a room message.

#### Properties 
* [client](#client)
* [content](#content)
* [author](#author)
* [community](#community)
#### Methods 
* [reply](#reply)



# Properties 

### <a id=client></a>.client

>The client.
>
>**Type:**  [`Client`](Client.md)
### <a id=content></a>.content

>The author's message.
>
>**Type:**  [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)
### <a id=author></a>.author

>The author.
>
>**Type:**  [`Player`](Player.md)
### <a id=community></a>.community

>The author's community ID.
>
>**Type:**  [`enums.chatcommunity`](Enums.md#chatcommunity)


# Methods

### <a id=reply></a>RoomMessage.reply(message)

>Reply the author with a message.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| message |  [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string) | The message. |
>
>
> **Example :**
 >```js
>client.on('roomMessage', (message) => {
>	if (client.nickname == message.author.nickname)
>		return;
>	message.reply('Hello');
>}
>```
