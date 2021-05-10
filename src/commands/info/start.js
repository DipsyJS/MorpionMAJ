const { Client, Message, MessageEmbed } = require('discord.js');
const { tictactoe, confirmation } = require("../../api/index");

module.exports = {
    name: 'start',
    usage: "<user>",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     * 
     */
    /**
      * @name tictactoe
      * @param {Object} options options
      * @param {any} [options.message] parameter used for message event
      * @param {any} [options.player_two] second player in the game.
      */
    run: async (client, message, args) => {
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("❌ | TicTacToe a besoin de la permission `ADMINISTRATOR` pour vous aider à jouer. Veuillez lui donner. ")
        }
        const user = message.mentions.members.first();
        if (!user) return message.channel.send("❌ | Vous devez spécifier avec quelle personne vous souhaitez jouer. ");
        if (user === message.guild.me) {
            return message.channel.send("❌ | Vous ne pouvez pas jouer avec le bot. ");
        }
        new tictactoe({
            message: message,
            player_two: user,
        });

    }
}