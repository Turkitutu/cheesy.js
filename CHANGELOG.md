# Changelogs

## v2.0.0 - 06/29/2020

## News
- Add whisper event.
- Add rawPacket event.
- Add rawTribulle event.
- Add rawOldPacket event.
- Add Client.sendWhisper function.
- Add Client.handleTribulle function.
- Add Client.sendTribullePacket function.
- Add Client.handleOldPacket function.

## Changes
- Remove ~~Client.sendRoomMessage~~ and replace it with [`[Room.sendMessage]`](docs/Room.md#roomsendmessagemessage)

## v1.0.5 - 06/28/2020

## News
- Add [`RoomMessage`](docs/RoomMessage.md) for room messages.
- Add [`roomPlayerLeft`](docs/Client.md#roomplayerleft) event.

## v1.0.4 - 06/26/2020

## Changes
- Remove crypto from the package becasue it is built-in library.
- Switch http client library from request to node-fetch because it deprecated library.

