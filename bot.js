// EVERYTHING BELOW THIS LINE IS REQUIRED DO NOT CHANGE ANY OF THIS UNLESS YOU KNOW WHAT YOU ARE DOING
// THESE ARE REQUIRED TO HELP THE BOT FUNCTION PROPERLY.
const Discord = require("discord.js");
const PREFIX = process.env.PREFIX;
const client = new Discord.Client();
const antispam = require("discord-anti-spam");
const antispam = new antispam({
  warnThreshold: 4, // Amount of messages sent in a row that will cause a warning.
  banThreshold: 7, // Amount of messages sent in a row that will cause a ban
  maxInterval: 5000, // Amount of time (in ms) in which messages are cosidered spam.
  warnMessage: "{@user}, Keep spamming in this server and I will dead your ass hoe", // Message will be sent in chat upon warning.
  banMessage: "**{user_tag}** has been banned for spamming.", // Message will be sent in chat upon banning.
  maxDuplicatesWarning: 7, // Amount of same messages sent that will be considered as duplicates that will cause a warning.
  maxDuplicatesBan: 15, // Amount of same messages sent that will be considered as duplicates that will cause a ban.
  deleteMessagesAfterBanForPastDays: 1, // Amount of days in which old messages will be deleted. (1-7)
  exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR", "MANAGE_GUILD", "BAN_MEMBERS"], // Bypass users with at least one of these permissions
  ignoreBots: false, // Ignore bot messages
  verbose: false, // Extended Logs from module
  ignoredUsers: [], // Array of string user IDs that are ignored
  ignoredRoles: [], // Array of string role IDs or role name that are ignored
  ignoredGuilds: [], // Array of string Guild IDs that are ignored
  ignoredChannels: [] // Array of string channels IDs that are ignored
});

// BELOW THIS LINE IS THE CLEAN FUNCTION DO NOT TOUCH THIS UNLESS YOU KNOW WHAT YOU ARE DOING!!!
// FUNCTIONS ARE REQUIRED TO EXECUTE ARGS AND STRINGS 
function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}	
	  
// BELOW THIS LINE ARE THE BOTS "CONFIG VARS/VARIABLES" THEY ARE REQUIRED TO HELP IT RUN CORRECTLY ONLY REPLACE THESE WITH YOUR INFORMATION DO NOT DELETE THEM AS IT MAY CAUSE ISSUES OR BREAK THE BOT 
// MAKE SURE YOU ENTER THE CORRECT INFORMATION PROVIDING THE WRONG DISCORD ID COULD GIVE SOMEONE ELSE ACCESS TO THE BOTS OWNER ONLY COMMANDS (OWNER ONLY COMMANDS COMING SOON)
var prefix = process.env.PREFIX; // Replace "process.env.PREFIX" with prefix of your choice if self hosting (Not Auto Deployed) Currrnt Prefix: (`tb/`) make sure you include the "(``)"
var token = process.env.BOT_TOKEN; // Replace "process.env.BOT_TOKE" with your bot token if self hosting (Not Auto Deployed) Example: (`Nakdndyak13816akd.odb`) make sure you include the "(``)"
var embedColor = require('./config');

// BELOW THIS LINE IS THE BOTS CONSOLE LOG READY MESSAGE, PLAY STATUS (NOW STREAMING) AND THE MESSAGE THAT IS SENT WHEN INVITED TO A NEW SERVER!!!
// YOU CAN CHANGE, DELETE OR EDIT THIS AS YOU WOULD LIKE BUT IT DOES GIVE THE BOT A NICE CLEAN LOOK 
client.on("ready", () => {
  console.log("ツ The Watchers ツ | Logged in! Server count: ${client.guilds.size}");
  client.user.setGame(`Ninja Gen`, `https://www.twitch.tv/monstercat`);
});

const serverStats = {
  guildID: '648353322452910080',
  totalUsersID: '652417178095845376',
  memberCountID: '652417207577477152',
  botCountID: '652417305304760330'
}

client.on("guildCreate", guild => {

const owner = client.users.get("510065483693817867");

const dmLog = new Discord.RichEmbed()
    .setTitle("Decoy Invites")
    .setColor("0xff0000")
    .setDescription("I have been invited to" + ` ${guild.name}` + `(${guild.id})`)
    .setFooter("© Ninja Gen")
  owner.send(dmLog)
});

 
client.on('guildMemberAdd', member => {
  if (member.guild.id !== serverStats.guildID) return;
  client.channels.get(serverStats.totalUsersID).setName(`Total: ${member.guild.memberCount}`);
  client.channels.get(serverStats.memberCountID).setName(`Users: ${member.guild.members.filter(m => !m.user.bot).size}`);
  client.channels.get(serverStats.botCountID).setName(`Bots: ${member.guild.members.filter(m => m.user.bot).size}`);
});

client.on('guildMemberRemove', member => {
  if (member.guild.id !== serverStats.guildID) return;
  client.channels.get(serverStats.totalUsersID).setName(`Total: ${member.guild.memberCount}`);
  client.channels.get(serverStats.memberCountID).setName(`Users: ${member.guild.members.filter(m => !m.user.bot).size}`);
  client.channels.get(serverStats.botCountID).setName(`Bots: ${member.guild.members.filter(m => m.user.bot).size}`);
});

client.on('message', (message) => { //whenever a message is sent
  if (message.content.includes('discord.gg/'||'discordapp.com/invite/')) { //if it contains an invite link
  if (message.member.hasPermission("ADMINISTRATOR")) return;
    message.delete() //delete the message
      .then(message.channel.send('Link Deleted:\n**Invite links are not permitted on this server**'))
  }
})

client.on('message', (message) => { //whenever a message is sent
  if (message.content.includes('youtu.be'||'youtube.com')) { //if it contains an invite link
  if (message.member.hasPermission("ADMINISTRATOR")) return;
    message.delete() //delete the message
      .then(message.channel.send('Link Deleted:\n**Invite links are not permitted on this server**'))
  }
})

client.on('message', (message) => { //whenever a message is sent
  if (message.content.includes('Nigger'||'Niggar' || 'nigger' || 'niggar')) { //if it contains an invite link
  if (message.member.hasPermission("ADMINISTRATOR")) return;
    message.delete() //delete the message
      .then(message.channel.send('Link Deleted:\n**Invite links are not permitted on this server**'))
  }
})

client.on('message', (message) => {

	if (message.channel.type.toLowerCase() == 'dm' || message.channel.type.toLowerCase() == 'group' && message.member.hasPermission("MANAGE_MEMBERS")) {
		var embed = new Discord.RichEmbed()
			.setAuthor(message.author.username, message.author.avatarURL)
			.setDescription(message.content)
			.setTimestamp(new Date())
			.setColor('#C735D4');
	}
	if (message.author.id == 377898758870007810 || message.author.id == 431893326892105758 || message.author.id == 462577497666617344) return;
	if (message.author.bot) return;
 
	if (message.content.includes(`<@510065483693817867>`)) {
                message.delete().catch()
		message.reply("My owner is currently busy Developing Ninja Gen, Sleeping or Enjoying his life, he will get back to you as soon as possible !").then(msg => {msg.delete(23000)});
		let ownerEmbed = new Discord.RichEmbed()
			.setTitle("Mention Detected")
			.setColor("#FF00FF")
			.addField("Username:", `${message.author.username}#${message.author.discriminator}`, true)
			.addField("User's ID:", message.author.id, true)
			.addBlankField(true)
			.addField("Server:", message.guild.name, true)
			.setTimestamp()
		client.users.get("510065483693817867").send(ownerEmbed);
	}
});

client.on("message", (message) => {

// Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  if (message.guild.id !== serverStats.guildID) return;
  if (message.author.bot) return;

// BELOW THIS LINE IS THE BOTS COMMANDS EDIT, REPLACE AND ADD TO THESE AS NEEDED IF YOU ARE WANTING TO EMBED THE COMMAND YOU CAN USE ONE OF THE BOTS PRE EXISTING COMMANDS AS A TEMPLATE
// MAKE SURE WHEN YOU ARE ADDING COMMANDS YOU FOLLOW THE PATH AND ROUTINE THAT I HAVE LISTED BELOW.
  if (message.content.toLowerCase().startsWith(prefix + `invite`)){

  let error = new Discord.RichEmbed()
      .setColor("0xff0000")
      .setTitle(":no_entry: Error :no_entry:")
      .setDescription(`<@${message.author.id}>` + " Please open a ticket before running this command");
      message.delete().catch();

let myRole = message.guild.roles.get("648354653091790862");
 
if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(error);

if(message.member.roles.has(myRole.id)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`Ninja Gen Invite`)
    .setColor(0x00AE86)
    .setDescription(`Redistributing this link without permission will result in a Blacklist from the bot`)
    .addField(`Ninja Gen`, `[Invite Link Here](https://discordapp.com/api/oauth2/authorize?client_id=648267102528077824&permissions=2147483127&scope=bot)`)
    .setFooter(`Ninja Gen Protection`, `https://cdn.discordapp.com/avatars/648267102528077824/abb9723ce26116219804047f4979a6cf.png?size=2048?size=1024`)
    .setThumbnail(`https://cdn.discordapp.com/avatars/648267102528077824/abb9723ce26116219804047f4979a6cf.png?size=2048?size=1024`)
    message.delete().catch();
    message.channel.send({ embed: embed });
  } else { 
    return message.channel.send("Please wait for a Staff Member")
    }
  }

if (command === "say") {
    message.delete().catch()
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    // And we get the bot to say the thing: 
    const sayEmbed = new Discord.RichEmbed()
    sayEmbed.setColor("#FF00FF")
    sayEmbed.setDescription(`${sayMessage}`)
    message.channel.send(sayEmbed);
  }
 
client.on("message", (msg) => {
  AntiSpam.message(msg);
});
   
});

// THE CLIENT LOGIN PROCESS (BOT READS THE TOKEN FROM HERE)
// ADDITIONALLY YOU COULD ADD YOUR OWNERID INSTEAD 
client.login(process.env.BOT_TOKEN);
//////////////////////////////////////////////////////////////////////////////////////// COPYRIGHT INFORMATION DO NOT TOUCH THIS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////// Created By: Tyler. H#9393 | ツ The Watchers Bot Devs ツ /////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////// Support Server: https://discord.gg/Hg8jyzQ  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
