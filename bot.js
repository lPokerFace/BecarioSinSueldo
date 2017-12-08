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
    msg.channel.sendMessage('help - Lista de los códigos disponibles');
  }
  if (msg.content === prefix + 'Pablo') {
    msg.channel.sendMessage('http://www.magazinefa.com/assets/uploads/2016/04/pablo-3-980x675.png');
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('bienvenida', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Bienvenido ${member}, di tu nombre de usuario en RR y el partido al que perteneces (PCE, PCO o PCA)`);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
