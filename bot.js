const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '_'

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
     if (message.content === prefix + 'help') {
    	 message.sendMessage('help - Muestra los códigos del bot.');
  	}
     if (message.content === prefix + 'Trotsky') {
    	 message.sendMessage(':piolet:');
  	}
 if (message.content === prefix + 'Pablo') {
    	 message.sendMessage('http://i61.tinypic.com/33mtlj6.png');
  	}    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
