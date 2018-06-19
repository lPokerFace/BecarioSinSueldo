const Discord = require('discord.js');
const client = new Discord.Client();
const YoutubeDL = require('youtube-dl');
const ytdl = require('ytdl-core');

client.on('ready', () => {
   console.log('I\'m Online \nI\'m Online')
   client.user.setActivity("+help para lista de comandos.")
});

var prefix = '+'
var servers = {};

client.on('message', message => {
  function play(connection, message){
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
      if (server.queue[0]) play(connection, message);
      else connection.disconnect
    });
  }
  var args2 = message.content.split(" ");
  let args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  let say = message.content.split("decir").slice(1);
  var queue = server.queue

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
          value: "Muestra una breve explicación de las habilidades (o stats) en Rival Regions"
        },
        {
          name: "`trabajo`",
          value: "Muestra información sobre el trabajo en Rival Regions."
        },
        {
          name: "`comité`",
          value: "Muestra los cargos del comité junto a los dueños de dicho cargo."
        },
        {
          name: "`prueba`",
          value: "Envía un mensaje privado de prueba para comprobar el estado del bot."
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: 'https://cdn.discordapp.com/avatars/230330757598543873/38cfc50bbd956d4f562428902a29d265.png',
        text: "© lPokerFace"
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
        icon_url: 'https://cdn.discordapp.com/avatars/230330757598543873/38cfc50bbd956d4f562428902a29d265.png',
        text: "© lPokerFace"
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
        value: "EL principal método de obtención es trabajndo en minas de oro donde por 1 punto energético recibes 1 unidad de oro, también se consigue oro completando misiones, con medallas de partido o comprándolo en la tienda del juego.."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: 'https://cdn.discordapp.com/avatars/230330757598543873/38cfc50bbd956d4f562428902a29d265.png',
      text: "© lPokerFace"
    }}});}

  if (message.content.startsWith(prefix + 'trabajo')) {

      message.channel.send({embed: {
       color: 3447003,
       author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Trabajo",
      url: "http://google.com",
      description: "La mecánica principal del juego es trabajar en fábricas, el trabajo en fábricas te permite conseguir recursos, oro, dinero y experiencia laboral.",
      fields: [{
          name: "`Cómo trabajar en móvil`",
          value: 'Seleccionas la pestaña de trabajo en el menu inferior del juego, se te abrirá una nueva pantalla con diferente información, arriba se encuentra la cantidad de recursos de la región, si los recursos están a 0 no lograrás recursos al trabajar, en la parte baja encontrará las mejores fábricas del estado y un botón para ver las otras fábricas de la región, selecciona el botón verde en el que pone `Trabajar` en la fábrica en la que quieras realizar dicha acción y se abrirá un nuevo panel donde puedes elegir la cantidad de energía que quieres gastar junto a un botón par trabajar y un botón para activar el modo automático en caso de ser miembro premium.'
        },
        {
          name: "`Cómo trabajar en PC`",
          value: "Seleccionas la pestaña de trabajo en el menú superior del juego, se te abrirá una nueva pantalla con un diferente información, arriba se encuentra la cantidad de recursos de al región, debajo se encuentran 3 fábricas del administrador para los niveles bajos, debajo de estas fábricas se encuentra el botón para buscar una fábrica privada, si lo pulsas se abrirá una pantalla con todas las fábricas de la región, para trabajar en una debes pulsar el botón verde en el que pone `Trabajar` al lado de la fábrica, cuando hagas eso se abrirá un nuevo panel con información sobre la fábrica, en este panel puedes elegir la cantidad de energía que quieres gastar, para trabajar solo debes pulsar el botón en el que pone `Trabajar` en este nuevo panel. Puedes activar el modo automático en caso de ser usuario premium"
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: 'https://cdn.discordapp.com/avatars/230330757598543873/38cfc50bbd956d4f562428902a29d265.png',
        text: "© lPokerFace"
      }}});}

  if (message.content.startsWith(prefix + 'comité')) {

        message.channel.send({embed: {
         color: 3447003,
         author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Comité",
        url: "http://google.com",
        description: "Estos son los cargos del comité central junto a sus actuales dueños.",
        fields: [{
            name: "`Líder del Partido`",
            value: "Dueño del cargo: @Cebolla_Man"
          },
          {
            name: "`Secretario General`",
            value: "Dueño del cargo: @viprus"
          },
          {
            name: "`Secretario Institucional`",
            value: "Dueño del cargo: @Eldestructor109"
          },
          {
            name: "`Secretario Juvenil`",
            value: "Dueños del cargo: @lPokerFace @Rafael jerónimo"
          },
          {
            name: "`Comisario de los Boinas`",
            value: "Dueño del cargo: @Nepomu"
          },
          {
            name: "`Secretario de Información`",
            value: "Dueño del cargo: @Ángel S. López"
          },
          {
            name: "`Reclutador`",
            value: "Dueños del cargo: @El viejo Jenkins @Vicente Rojo Lluch"
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: 'https://cdn.discordapp.com/avatars/230330757598543873/38cfc50bbd956d4f562428902a29d265.png',
          text: "© lPokerFace"
        }}});}

  if (message.content.startsWith(prefix + 'asd')) {
    var prueba = require('./prueba.js');
    let val = prueba.prueba();
    console.log('funsiona')
  }

  if (message.content.startsWith(prefix + 'setgame')) {
    client.user.setActivity(argresult);
   }

  if (message.content.startsWith(prefix + 'prueba')) {
    message.channel.send('Mira tus mensajes privados.');
    message.author.send('Esto es una prueba de Mensaje Privado.');
  }

  if (message.content.startsWith(prefix + 'decir')) {
    message.delete()
    message.channel.send(say)
  }

  if (message.content.startsWith(prefix + 'play')) {
    if(!args2[1]) {
      message.channel.send("Inserta un link por favor.")
    }

    if(!message.member.voiceChannel) {
      message.channel.send("Debes estar en un canal de voz")
    }

    if (!servers[message.guild.id]) servers[message.guild.id] = {
      queue: []
    };

    var server = servers[message.guild.id];

    server.queue.push(args2[1]);

    message.channel.send("Canción añadida a la lista de reproducción.")

    if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
      play(connection, message);
    });

  }

  if (message.content.startsWith(prefix + 'skip')) {
    var server = servers[message.guild.id];

    if (server.dispatcher) server.dispatcher.end();
  }

  if (message.content.startsWith(prefix + 'stop')) {
    var server = servers[message.guild.id];

    if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
  }

  if (message.content.startsWith(prefix + 'queue')) {
    message.channel.send(queue[0]);
  }

});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'bienvenida');
  if (!channel) return;
  channel.send(`Bienvenido ${member}, di tu nombre de RR y el partido al que perteneces.`);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'bienvenido');
  if (!channel) return;
  channel.send(`Bienvenido ${member}, este es el canal de bienvenida al discord de enseñanza de los novatos. Por favor específica tu nombre en RR y tu partido.`);
});

client.login(process.env.BOT_TOKEN);
