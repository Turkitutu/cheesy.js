
class Room{
    constructor(name, private){
        this.name = name
        this.playerList = [];
        this.private = private;
    }

    getPlayer(identifier, value){
        if (identifier == 'id')
            return this.playerList.every(player => player.id == value)
        else if (identifier == 'name' || identifier == 'username' || identifier == 'nickname')
            return this.playerList.every(player => player.nickname == value)
    }


}