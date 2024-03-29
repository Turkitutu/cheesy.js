# ByteArray's Documentation
Creates a ByteArray instance representing a packed array of bytes, so that you can use the methods and properties in this class to optimize data storage and stream.

#### Methods 
* [expand](#expand)
* [write](#write)
* [clear](#clear)
* [readBoolean](#readBoolean)
* [readByte](#readByte)
* [readInt](#readInt)
* [readShort](#readShort)
* [readUnsignedByte](#readUnsignedByte)
* [readUnsignedInt](#readUnsignedInt)
* [readUnsignedShort](#readUnsignedShort)
* [readUTF](#readUTF)
* [toString](#toString)
* [writeBoolean](#writeBoolean)
* [writeByte](#writeByte)
* [writeBytes](#writeBytes)
* [writeInt](#writeInt)
* [writeShort](#writeShort)
* [writeUnsignedByte](#writeUnsignedByte)
* [writeUnsignedInt](#writeUnsignedInt)
* [writeUnsignedShort](#writeUnsignedShort)
* [writeUTF](#writeUTF)



# Methods

### <a id=constructor></a>ByteArray(buffer)

>Constructor.
>
>**Parameters :**
>| Parameter | Type | Optional | Default | Description |
>| :-: | :-: | :-: | :-: | :-- |
>| buffer |  [`Buffer`](https://nodejs.org/api/buffer.html) | ✔ |  | Array of bytes. |
>
>
> **Example :**
 >```js
>const packet = new ByteArray();
>```
### <a id=expand></a>ByteArray.expand(value)

>Expands the buffer
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| value |  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The value |
>
### <a id=write></a>ByteArray.write(value)

>Adds data to the buffer.
>
>**Parameters :**
>| Parameter | Type |
>| :-: | :-: |
>| value |  [`Buffer`](https://nodejs.org/api/buffer.html) [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) [`ByteArray`](ByteArray.md) |
>
>
> **Return :**  [`ByteArray`](ByteArray.md) The byte stream.
### <a id=clear></a>ByteArray.clear()

>Clears the contents of the bytearray and resets the length and positions properties to 0.
>
### <a id=readboolean></a>ByteArray.readBoolean()

>Reads a Boolean value from the byte stream.
>
>
> **Return :**  [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) The Boolean that was read from the byte stream.
### <a id=readbyte></a>ByteArray.readByte()

>Reads a signed byte from the byte stream.
>
### <a id=readint></a>ByteArray.readInt()

>Reads a signed 32-bit integer from the byte stream.
>
>
> **Return :**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) The signed 32-bit integer that was read from the byte stream.
### <a id=readshort></a>ByteArray.readShort()

>Reads a signed 16-bit integer from the byte stream.
>
### <a id=readunsignedbyte></a>ByteArray.readUnsignedByte()

>Reads an unsigned byte from the byte stream.
>
### <a id=readunsignedint></a>ByteArray.readUnsignedInt()

>Reads an unsigned 32-bit integer from the byte stream.
>
### <a id=readunsignedshort></a>ByteArray.readUnsignedShort()

>Reads an unsigned 16-bit integer from the byte stream.
>
### <a id=readutf></a>ByteArray.readUTF()

>Reads a UTF-8 string from the byte stream.
>
>
> **Return :**  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) Text
### <a id=tostring></a>ByteArray.toString()

>Converts the byte array to a string.
>
>
> **Return :**  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) The bytes that was converted to string.
### <a id=writeboolean></a>ByteArray.writeBoolean(value)

>Writes a Boolean value.
>
>**Parameters :**
>| Parameter | Type |
>| :-: | :-: |
>| value |  [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
>
>
> **Return :**  [`ByteArray`](ByteArray.md) The byte stream.
### <a id=writebyte></a>ByteArray.writeByte(value)

>Writes a byte to the byte stream.
>
>**Parameters :**
>| Parameter | Type |
>| :-: | :-: |
>| value |  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
>
>
> **Return :**  [`ByteArray`](ByteArray.md) The byte stream.
### <a id=writebytes></a>ByteArray.writeBytes(bytes, offset, length)

>Writes a sequence of length bytes from the specified byte array, bytes, starting offset bytes into the byte stream.
>
>**Parameters :**
>| Parameter | Type |
>| :-: | :-: |
>| bytes |  [`ByteArray`](ByteArray.md) |
>| offset |  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
>| length |  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
>
>
> **Return :**  [`ByteArray`](ByteArray.md) The byte stream.
### <a id=writeint></a>ByteArray.writeInt(value)

>Writes a 32-bit signed integer to the byte stream.
>
>**Parameters :**
>| Parameter | Type |
>| :-: | :-: |
>| value |  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
>
>
> **Return :**  [`ByteArray`](ByteArray.md) The byte stream.
### <a id=writeshort></a>ByteArray.writeShort(value)

>Writes a 16-bit integer to the byte stream.
>
>**Parameters :**
>| Parameter | Type |
>| :-: | :-: |
>| value |  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
>
>
> **Return :**  [`ByteArray`](ByteArray.md) The byte stream.
### <a id=writeunsignedbyte></a>ByteArray.writeUnsignedByte(value)

>Writes a unsigned byte to the byte stream.
>
>**Parameters :**
>| Parameter | Type |
>| :-: | :-: |
>| value |  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
>
>
> **Return :**  [`ByteArray`](ByteArray.md) The byte stream.
### <a id=writeunsignedint></a>ByteArray.writeUnsignedInt(value)

>Writes a 32-bit unsigned integer to the byte stream.
>
>**Parameters :**
>| Parameter | Type |
>| :-: | :-: |
>| value |  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
>
>
> **Return :**  [`ByteArray`](ByteArray.md) The byte stream.
### <a id=writeunsignedshort></a>ByteArray.writeUnsignedShort(value)

>Writes a 16-bit unsigned integer to the byte stream.
>
>**Parameters :**
>| Parameter | Type |
>| :-: | :-: |
>| value |  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
>
>
> **Return :**  [`ByteArray`](ByteArray.md) The byte stream.
### <a id=writeutf></a>ByteArray.writeUTF(value)

>Writes a UTF-8 string to the byte stream.
>
>**Parameters :**
>| Parameter | Type |
>| :-: | :-: |
>| value |  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
>
>
> **Return :**  [`ByteArray`](ByteArray.md) The byte stream.
