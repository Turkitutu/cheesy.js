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
>| name |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The Connection name. |
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
>| host |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The host. |
>| port |  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The port. |
>
### <a id=send></a>Connection.send(identifier, packet)

>Sends a packet to the connection.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| identifier |  [`enums.identifiers`](Enums.md#identifiers) | The identifier of the packet. |
>| packet |  [`ByteArray`](ByteArray.md) | The packet. |
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
