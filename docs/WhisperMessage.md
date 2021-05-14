# WhisperMessage's Documentation
Represents a message.

#### Properties 
* [client](#client)
* [content](#content)
* [author](#author)
* [sentTo](#sentTo)
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
>**Type:**  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
### <a id=author></a>.author

>The author's nickname.
>
>**Type:**  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
### <a id=sentto></a>.sentTo

>The player name who sent to them.
>
>**Type:**  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
### <a id=community></a>.community

>The author's community ID.
>
>**Type:**  [`enums.chatCommunity`](Enums.md#chatCommunity)


# Methods

### <a id=reply></a>WhisperMessage.reply(message)

>Reply the author with a whisper message.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| message |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The message. |
>
>
> **Example :**
 >```js
>client.on('whisper', (message) => {
>	if (client.nickname == message.author)
>		return;
>	message.reply('Hello');
>}
>```
