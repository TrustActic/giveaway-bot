//This is the bots required node modules, certain aspects of the code will not work without this.
const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone : true,
  fetchAllMembers : true
});
 
const config = require("../data/config.json");
const fs = require("fs");
const snekfetch = require('snekfetch');

//This SHOULD allow us to use the "client, message & args" async functions.(Example: message.author.id)
exports.run = async (client, message, args) => {
 
//This is your Command or Discord Rich Embed code Line followed by the end of the command. OR close "}" bracket
const embed = new Discord.RichEmbed()
    .setTitle(`:page_with_curl: ツ Ticket Bot ツ Commands List`)
    .setColor(0x00AE86)
    .setDescription(`Here is a list of all available commands`)
        .addField(`Help & Support`, `[${prefix}help] > Displays my help and support message\n[${prefix}ticket help] > Displays my how to add and remove a member from a ticket message`)
        .addField(`Commands List`, `[${prefix}commands] > Displays this command list`)
	.addField(`Ping Check`, `[${prefix}ping] > Pings the bot to see how long it takes to react`)
        .addField(`About ツ Ticket Bot ツ`, `[${prefix}about] > Tells you everything you need to know about me`)
	.addField(`Open A Ticket`, `[${prefix}open] > Opens a new Support Ticket and tags the Support Team`)
        .addField(`Close A Ticket`, `[${prefix}close] > Closes the current Support Ticket`)
	.addField(`Add A Member`, `[${prefix}add @User#1234] > Adds the mentioned user to the current Support Ticket\nExample: [${prefix}add @Tyler. H#9393]`)
	.addField(`Remove A Member`, `[${prefix}remove @User#1234] > Removes the mentioned user from the current Support Ticket\nExample: [${prefix}remove @Tyler. H#9393]`)
	.addField(`Invite Me`, `[${prefix}invite] > Generates an invite link`) 
        .addField(`Command List Link`, `Link Coming Soon`) 
    .setFooter(`ツ Ticket Bot ツ v1.00`, `http://i.imgur.com/bt9OsRs.jpg`)
    .setThumbnail(`http://i.imgur.com/bt9OsRs.jpg`)
    message.channel.send({ embed: embed });
  }