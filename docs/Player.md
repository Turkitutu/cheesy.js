# Player's Documentation
Represents a player from the room.

#### Properties 
* [nickname](#nickname)
* [gender](#gender)
* [look](#look)
* [pcode](#pcode)
* [title](#title)
* [titleStars](#titleStars)
* [hasCheese](#hasCheese)
* [isDead](#isDead)
* [isShaman](#isShaman)
* [isVampire](#isVampire)
* [score](#score)
* [mouseColor](#mouseColor)
* [nameColor](#nameColor)
* [shamanColor](#shamanColor)
* [facingRight](#facingRight)
* [movingLeft](#movingLeft)
* [movingRight](#movingRight)
* [x](#x)
* [y](#y)
* [vx](#vx)
* [vy](#vy)
* [isJumping](#isJumping)
#### Methods 
* [read](#read)



# Properties 

### <a id=nickname></a>.nickname

>The player's nickname.
>
>**Type:**  [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)
### <a id=gender></a>.gender

>The player's gender.
>
>**Type:**  [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)
### <a id=look></a>.look

>The current items and customisation of the player’s outfit as `1;0,0,0,0,0,0,0,0,0`.
>
>**Type:**  [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)
### <a id=pcode></a>.pcode

>The player's temporary code.
>
>**Type:**  [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)
### <a id=title></a>.title

>The player's title ID.
>
>**Type:**  [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)
### <a id=titlestars></a>.titleStars

>How many stars in the title.
>
>**Type:**  [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)
### <a id=hascheese></a>.hasCheese

>Whether or not the player has a cheese.
>
>**Type:**  [`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)
### <a id=isdead></a>.isDead

>Whether or not the player is dead.
>
>**Type:**  [`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)
### <a id=isshaman></a>.isShaman

>Whether or not the player is shaman.
>
>**Type:**  [`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)
### <a id=isvampire></a>.isVampire

>Whether or not the player is vampire.
>
>**Type:**  [`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)
### <a id=score></a>.score

>The player's score.
>
>**Type:**  [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)
### <a id=mousecolor></a>.mouseColor

>The player's mouse color.
>
>**Type:**  [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)
### <a id=namecolor></a>.nameColor

>The player's name color, By default : `-1`.
>
>**Type:**  [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)
### <a id=shamancolor></a>.shamanColor

>The player's shaman color.
>
>**Type:**  [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)
### <a id=facingright></a>.facingRight

>Whether or not the player is facing right.
>
>**Type:**  [`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)
### <a id=movingleft></a>.movingLeft

>Whether or not the player is moving left.
>
>**Type:**  [`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)
### <a id=movingright></a>.movingRight

>Whether or not the player is moving right.
>
>**Type:**  [`boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)
### <a id=x></a>.x

>The player’s X coordinate.
>
>**Type:**  [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)
### <a id=y></a>.y

>The player’s Y coordinate.
>
>**Type:**  [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)
### <a id=vx></a>.vx

>The player’s X velocity.
>
>**Type:**  [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)
### <a id=vy></a>.vy

>The player’s Y velocity.
>
>**Type:**  [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)
### <a id=isjumping></a>.isJumping

>Whether or not the player is in the air.
>
>**Type:**  [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)


# Methods

### <a id=read></a>Player.read(packet)

>Reads player data from a packet.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| packet |  [`Bytearray`](Bytearray.md) | The packet. |
>
