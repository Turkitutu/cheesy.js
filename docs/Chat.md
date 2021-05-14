# Chat's Documentation
Represents a #chat in the game.

#### Properties 
* [client](#client)
* [name](#name)
#### Methods 
* [who](#who)
* [leave](#leave)
* [send](#send)



# Properties 

### <a id=client></a>.client

>The client.
>
>**Type:**  [`Client`](Client.md)
### <a id=name></a>.name

>The chat's name.
>
>**Type:**  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)


# Methods

### <a id=who></a>Chat.who()

>Sends the command /who to the chat and returns the list of players.
>
>
> **Return :**  [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)**<** [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**>** The list of player names.
### <a id=leave></a>Chat.leave()

>Leaves the chat.
>
### <a id=send></a>Chat.send(content)

>Sends a message to the chat.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| content |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The content of the message. |
>
>
> **Return :**  [`ChatMessage`](ChatMessage.md) The ChatMessage.
