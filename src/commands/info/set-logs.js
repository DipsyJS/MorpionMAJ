const { MessageEmbed} = require('discord.js');
const Schema = require('../../models/infos');

module.exports = {
    name: 'set-logs',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const channel = message.mentions.channels.first();
        if(!channel) {
          return message.channel.send("❌ | Il faut spéficier un channel, ou un vrai channel. ");
        } else {
          Schema.findOne({ Guild: message.guild.id }, async (err, data) => {
            if(!data) {
              new Schema({
                Guild: message.guild.id,
                Channel: channel
              }).save()
              message.channel.send(`${channel} a bien été ajouté comme channel de logs pour les parties. `)
            } else {
              new Schema({
                Guild: message.guild.id,
                Channel: channel
              }).update();
              message.channel.send(`${channel} a bien été mis à jour comme channel de logs pour les parties. `)
            }
          })
        }
    }
}
