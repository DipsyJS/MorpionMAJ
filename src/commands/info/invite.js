const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'invite',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        message.channel.send(new MessageEmbed().setTitle('Add me !').setURL("https://discord.com/api/oauth2/authorize?client_id=840946524924936212&permissions=8&scope=bot"))
    }
}