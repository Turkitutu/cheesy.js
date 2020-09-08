# Connection's Documentation
Represents a client that connects to Transformice.

#### Methods 
* [connect](#connect)
* [send](#send)
* [close](#close)
#### Events
* [connect](#connect)



# Methods

### <a id=constructor></a>Connection(client, name)

>Constructor.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| client |  [`Client`](Client.md) | The client. |
>| name |  [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string) | The Connection name. |
>
>
> **Example :**
 >```js
>const conn = new Connection(client, 'connectionName');
>```
### <a id=connect></a>Connection.connect(host, port)

>Connects the socket.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| host |  [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string) | The host. |
>| port |  [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number) | The port. |
>
### <a id=send></a>Connection.send(identifier, packet, method)

>Sends a packet to the connection.
>
>**Parameters :**
>| Parameter | Type | Optional | Default | Description |
>| :-: | :-: | :-: | :-: | :-- |
>| identifier |  [`enums.identifiers`](Enums.md#identifiers) |  |  | The identifier of the packet. |
>| packet |  [`Bytearray`](Bytearray.md) |  |  | The packet. |
>| method |  [`enums.ciphermethod`](Enums.md#ciphermethod) | ✔ | enums.cipherMethod.none | The algorithm method to cipher the packet with it. |
>
### <a id=close></a>Connection.close()

>Close the connection.
>


# Events


 **How to use an event :**
 ```js
client.on('eventName', (property) => {
	// Your code
}
```

### <a id=connect></a>connect

>Emitted when the connection is successfully connected. 
>
