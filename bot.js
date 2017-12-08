const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '_'

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg => {
  if (msg.content === prefix + 'Trotsky') {
    msg.channel.sendMessage('<:piolet:359043347391971339>'); 
  }
  if (msg.content === prefix + 'help') {
    msg.channel.sendMessage('help - Lista de los códigos disponibles');
  }
  if (msg.content === prefix + 'Pablo') {
    msg.channel.sendMessage('http://www.magazinefa.com/assets/uploads/2016/04/pablo-3-980x675.png');
  }
});

client.on("guildMemberAdd", (member) => {
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
  member.guild.channels.get("bienvenida").send(`"${member.user.username}" has joined this server`);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
