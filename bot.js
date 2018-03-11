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

  if (message.content.startsWith(prefix + 'pong')) {
      message.channel.send('subnormal');
   }

  if (message.content.startsWith(prefix + 'help')) {

     message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Lista de Comandos",
      url: "http://google.com",
      description: "Esta es una lista con los comandos del servidor y lo que hacen.",
      fields: [{
          name: "`help`",
          value: "Muestra una lista con los comandos y sus funciones."
        },
        {
          name: "`oro`",
          value: "Información detallada de los usos y métodos de obtención del oro."
        },
        {
          name: "`habilidades`",
          value: "Muestra una breve explicación de las habilidades (o stats) en RivalRegions"
        },
        {
          name: "`prueba`",
          value: "Envía un mensaje privado de prueba para comprobar el estado del bot."
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "© PCE"
      }}});}

  if (message.content.startsWith(prefix + 'habilidades')) {

     message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Habilidades",
      url: "http://google.com",
      description: "Existen 3 habilidades en el juego: Fuerza, Educación y Resistencia, estas habilidades se mejoran gastando dinero ($) u oro, esta última opción es mucho más rápida que la primera, también existe la opción de comprar un boost temporal de 100 puntos de una habilidad, es muy caro pero a al vez muy útil sobre todo en tiempos de guerra.",
      fields: [{
          name: "`Fuerza`",
          value: "Esta habilidad aumenta tu daño en guerras, tu efectividad trabajando en fábricas y reduce el coste de producir objetos y armamento."
        },
        {
          name: "`Educación`",
          value: "Aumenta el máximo de experiencia laboral que puedes acumular, aumenta un poco tu daño en guerra y reduce los costes de producción. El nivel 100 de Inteligencia te permite trabajar en los *Departamentos*."
        },
        {
          name: "`Aguante`",
          value: "Reduce la energía necesaria para trabajar y participar en guerras, aumenta levemente tu daño en guerra y amplía la capacidad del almacén un 1% por cada punto de habilidad."
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "© PCE"
      }}});}

  if (message.content.startsWith(prefix + 'oro')) {

    message.channel.send({embed: {
     color: 3447003,
     author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Oro",
    url: "http://google.com",
    description: "El oro es el principal recurso de este juego.",
    fields: [{
        name: "`Usos`",
        value: "Hay 2 usos principales del oro, creación de bebidas energéticas y mejora del nivel de fábrica. Además de estos usos también te piden oro en acciones como el cambio de nombre, de imagen, de nación o de región de fábrica."
      },
      {
        name: "`Métodos de obtención`",
        value: "El principal método de obtención es trabajndo en minas de oro donde por 10 puntos energéticos recibes 1 unidad de oro, también se consigue oro completando misiones, con medallas de partido o comprándolo en la tienda del juego.."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© PCE"
    }}});}

  if (message.content.startsWith(prefix + 'asd')) {
    const prueba = require('./prueba');
    let val = prueba.hello();}

  if (message.content.startsWith(prefix + 'setgame')) {
    client.user.setGame(argresult);
   }

  if (message.content.startsWith(prefix + 'prueba')) {
    message.channel.send('Mira tus mensajes privados.');
    message.author.send('Esto es una prueba de Mensaje Privado.');
  }

});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'bienvenida');
  if (!channel) return;
  channel.send(`Bienvenido ${member}, di tu nombre de RR y el partido al que perteneces.`);
});

client.login(process.env.BOT_TOKEN);
