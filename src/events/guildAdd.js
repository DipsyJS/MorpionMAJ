const client = require('../index');
const { MessageEmbed } = require('discord.js');

client.on('guildCreate', async (client, message) => {
    let channelToSend;

    guild.channels.cache.forEach((channel) => {
        if (channel.type === "text" && !channelToSend && channel.permissionsFor(guild.me).has("SEND_MESSAGES")) channelToSend = channel;
    })
    if (!channel) return;

    channelToSend.send(
        new MessageEmbed()
            .setAuthor(guild.name, guild.iconURL({ dynamic: true }))
            .setDescription("Merci de m'avoir invité ! Mon prefix par défaut est `!!`. Je suis heureux de pouvoir vous aider à jouer au morpion. ")
            .setColor("#2f3136")
    )
})