const cheeseJs = require('./lib/client.js');

const client = new cheeseJs();

const lua = true;

client.on('loginReady', (onlinePlayers, community, country) => {
    client.setCommunity(cheeseJs.enums.community.en);
    let name = 'Chessy#0180';
    if (lua) name = 'Yatsuki#6350';
    client.login(name, '141195AA', "village."); 
});

client.on('logged', (nickname, pcode) => {
    console.log(nickname+' connected')
});

client.on('ready', () => {
    console.log('Connected to the community platform');
    setTimeout(() => {
        client.joinTribeHouse();
    }, 2000)
    
});

client.on('roomMessage', (player, community, message) => {
    if (client.nickname == player.nickname)
        return;

    client.loadLua(message);
});

client.on('luaLog', (message) => {
    console.log(message);
    client.sendRoomMessage(message);
});

client.on('roomChange', (before, after) => {
    console.log('room : ', after.name);
});

client.start("30230668", "mAjqeuioadPmsaklzxuqLxamzn_.aei.13ajnduaop_asmasnjque13jadnjaks.masdnawjeoqz");

