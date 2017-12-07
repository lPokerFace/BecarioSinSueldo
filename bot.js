const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '_'

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg => {
  if (msg.content === prefix + 'Trotsky') {
    msg.channel.sendMessage('Pioletazo');
  }
  if (msg.content === prefix + 'help') {
    msg.channel.sendMessage(`help` <br/> 'Pablo' <br/> 'Trotsky')
  }
  if (msg.content === prefix + 'Pablo') {
    msg.channel.sendMessage('http://www.magazinefa.com/assets/uploads/2016/04/pablo-3-980x675.png')
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
