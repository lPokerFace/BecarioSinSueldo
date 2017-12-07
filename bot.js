const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '_'

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
     if (message.content === prefix + 'help') {
    	 message.reply('help - Muestra los códigos del bot.');
  	}
     if (message.content === prefix + 'Trotsky') {
    	 message.reply(':piolet:');
  	}
 if (message.content === prefix + 'Pablo') {
    	 message.reply('http://i61.tinypic.com/33mtlj6.png');
  	}    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
