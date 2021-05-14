# ChatMessage{'s Documentation
Represents a message in the chat.

#### Properties 
* [client](#client)
* [content](#content)
* [author](#author)
* [chat](#chat)
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
>**Type:**  [`Player`](Player.md)
### <a id=chat></a>.chat

>The chat of the message.
>
>**Type:**  [`Chat`](Chat.md)
### <a id=community></a>.community

>The author's community ID.
>
>**Type:**  [`enums.chatCommunity`](Enums.md#chatCommunity)


# Methods

### <a id=reply></a>ChatMessage{.reply(content)

>Reply the author with a message.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| content |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The content of the message. |
>
