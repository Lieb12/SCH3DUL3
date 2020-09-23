const Discord = require("discord.js");
const config = require("./config.json");


const client = new Discord.Client();
const prefix = "!";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command == "botprogress") {
    message.channel.send("Check back on Friday!")
  } else if (command == "teams") {
    message.channel.send("Teams: Writing, Art, Coding, Modelling/Anim, Misc.")
  } else if (command == "bot") {
    message.channel.send("Link to Github repo: https://github.com/Lieb12/SCH3DUL3 \n Any help is appreciated!")
  }
});

client.login(config.BOT_TOKEN);