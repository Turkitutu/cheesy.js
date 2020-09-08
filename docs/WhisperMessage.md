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
>**Type:**  [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)
### <a id=author></a>.author

>The author name.
>
>**Type:**  [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)
### <a id=sentto></a>.sentTo

>The player name who sent to them.
>
>**Type:**  [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)
### <a id=community></a>.community

>The author's community ID.
>
>**Type:**  [`enums.chatcommunity`](Enums.md#chatcommunity)


# Methods

### <a id=reply></a>WhisperMessage.reply(message)

>Reply the author with a whisper message.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| message |  [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string) | The message. |
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
