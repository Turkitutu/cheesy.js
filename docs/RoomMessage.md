# RoomMessage's Documentation
Represents a room message.

#### Properties 
* [client](#client)
* [content](#content)
* [author](#author)
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
>**Type:**  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
### <a id=author></a>.author

>The author.
>
>**Type:**  [`Player`](Player.md)


# Methods

### <a id=reply></a>RoomMessage.reply(message)

>Reply the author with a message.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| message |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The message. |
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
