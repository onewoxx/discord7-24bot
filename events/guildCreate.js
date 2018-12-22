const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  '**Alphexia BOT sunucunuza eklendi!**',
  '**Alphexia BOT** sunucunuzdaki insanlara kolaylıklar sağlar.',
  'Bot OneWox tarafından geliştirilmektedir.',
  'Botumuzun özelliklerini öğrenmek için !yardım komutunu kullanabilirsin.',
  '**ÖNEMLİ:** Botun kullanması için mod-log kanalı açın ve deneme için',
  '!uyarı komutunu kullanın.',
  '',
  `**Alphexia Resmî Discord Sunucusu** https://discord.gg/EMmfEyS`,
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + 'yardım | ' + client.guilds.size + ' sunucu | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcı');
})