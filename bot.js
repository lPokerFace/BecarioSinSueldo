
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'Trotsky') {
    msg.channel.sendMessage('¿Me estás llamando revi?');
  }
  if (msg.content === prefix + 'help') {
    msg.channel.sendMessage('Trotsky; Pablo;')
  }
  if (msg.content === prefix + 'Pablo') {
    msg.channel.sendMessage('http://www.magazinefa.com/assets/uploads/2016/04/pablo-3-980x675.png')
  }
});


client.login('proces.env.BOT_TOKEN');
