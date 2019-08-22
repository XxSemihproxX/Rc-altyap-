const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix; "sh!"

module.exports = client => {
console.log('>> Oynuyor Kısmı Başarıyla Güncellendi. <<');
console.log('>> Bot Hazır Giriş Yapıldı! <<');
  client.user.setStatus("Rahatsız Etmeyin");
   var oyun = [
"✨sh!yardım✨", 
"🍷| HerGün Yeni Komutlar.", 
"👑| Yapımcım : ѕємιн🍫🌙#5565", 
"🎆| 7/24 Aktif! Türk Bot.", 
"🎟| sh!davet Yazarak Botu Sunucunuza Ekleyebilirsiniz.", 
"🎟| Yeni ModLog. ",
"🎟| Yeni Resimli Giriş-Çıkış."

    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/xxsemihproxx");
        }, 2 * 7000);
}
