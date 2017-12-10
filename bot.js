const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   console.log('I\'m Online \nI\'m Online')
});

var prefix = '+'
client.on('message', message => {
  let args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
   if (message.content.startsWith(prefix + 'ping')) {
      message.channel.send('pong');
   }

   if (message.content.startsWith(prefix + 'help')) {
     message.channel.send(`help - Muestra una lista de todos los códigos. \nhabilidades - Muestra un resumen de la habilidades.\nprueba - Envía un mensaje privado de prueba. `);
   }

   if (message.content.startsWith(prefix + 'prueba')) {
    message.channel.send('Mira tus mensajes privados.');
    message.author.send('Esto es una prueba de Mensaje Privado.');
   }

   if (message.content.startsWith(prefix + 'habilidades')) {
     message.author.send(`**Habilidades** - \nHay tres habilidades que puedes mejorar: Fuerza, Inteligencia y Resistencia, estas habilidades se mejoran gastando dinero ($) u oro, esta última opción es mucho más rápida que la primera, también existe la opción de comprar un boost temporal de 100 puntos de una habilidad, es muy caro pero a al vez muy útil sobre todo en tiempos de guerra. \n \n**Fuerza** - Esta habilidad aumenta tu daño en guerras, tu efectividad trabajando en fábricas y reduce el coste de producir objetos y armamento. \n \n**Inteligencia** - Aumenta el máximo de experiencia laboral que puedes acumular, aumenta un poco tu daño en guerra y reduce los costes de producción. El nivel 100 de INteligencia te permite trabajar en los *Departamentos*.\n \n**Resistencia** - Reduce la energía necesaria para trabajar y participar en guerras, aumenta levemente tu daño en guerra y amplía la capacidad del almacén un 1% por cada punto de habilidad.`);

     message.channel.send('Mira tus mensajes privados.');
   }

   if (message.content.startsWith(prefix + 'setgame')) {
    client.user.setGame(argresult);
   }

});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'bienvenida');
  if (!channel) return;
  channel.send(`Bienvenido ${member}, di tu nombre de RR y el partido al que perteneces (PCO, PCA o PCE)`);
});

client.login(process.env.BOT_TOKEN);
