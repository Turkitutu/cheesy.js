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
>**Type:**  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
### <a id=gender></a>.gender

>The player's gender.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### <a id=look></a>.look

>The current items and customisation of the player’s outfit as `1;0,0,0,0,0,0,0,0,0`.
>
>**Type:**  [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
### <a id=pcode></a>.pcode

>The player's temporary code.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### <a id=title></a>.title

>The player's title ID.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### <a id=titlestars></a>.titleStars

>How many stars in the title.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### <a id=hascheese></a>.hasCheese

>Whether or not the player has a cheese.
>
>**Type:**  [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
### <a id=isdead></a>.isDead

>Whether or not the player is dead.
>
>**Type:**  [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
### <a id=isshaman></a>.isShaman

>Whether or not the player is shaman.
>
>**Type:**  [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
### <a id=isvampire></a>.isVampire

>Whether or not the player is vampire.
>
>**Type:**  [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
### <a id=score></a>.score

>The player's score.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### <a id=mousecolor></a>.mouseColor

>The player's mouse color.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### <a id=namecolor></a>.nameColor

>The player's name color, By default : `-1`.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### <a id=shamancolor></a>.shamanColor

>The player's shaman color.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### <a id=facingright></a>.facingRight

>Whether or not the player is facing right.
>
>**Type:**  [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
### <a id=movingleft></a>.movingLeft

>Whether or not the player is moving left.
>
>**Type:**  [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
### <a id=movingright></a>.movingRight

>Whether or not the player is moving right.
>
>**Type:**  [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
### <a id=x></a>.x

>The player’s X coordinate.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### <a id=y></a>.y

>The player’s Y coordinate.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### <a id=vx></a>.vx

>The player’s X velocity.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### <a id=vy></a>.vy

>The player’s Y velocity.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
### <a id=isjumping></a>.isJumping

>Whether or not the player is in the air.
>
>**Type:**  [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)


# Methods

### <a id=read></a>Player.read(packet)

>Reads player data from a packet.
>
>**Parameters :**
>| Parameter | Type | Description |
>| :-: | :-: | :-- |
>| packet |  [`ByteArray`](ByteArray.md) | The packet. |
>
>
> **Return :**  [`Player`](Player.md) The player
