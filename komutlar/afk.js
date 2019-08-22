const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  let user = message.author
  let sebep = args.join(" ")
  
  if (!sebep) return message.channel.send(`Bir sebep yazmalısın. <a:bekle:607839007614697492>`)
  
  db.set(`afk_${user.id}`, sebep)
  message.channel.send(`\`${sebep}\` Sebep'inden Dolayı Başarıyla AFK'sın! \n Seni Etiketlediklerinde \`${sebep}\` Yüzünden AFK Diyeceğim. <a:kalp:608569323681742848>`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'afk',
  description: "AFK olmanızı sağlar.",
  usage: 'afk <sebep>'
}
