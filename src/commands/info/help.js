const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        const select = args[0]?.toLowerCase();
        if (select === "start") {
            const e = new MessageEmbed()
                .setTitle("Commande Start")
                .setDescription("Nom -> Start \n Utilisation -> !!start @user\n Permissions -> Aucunes")
                .setFooter("TicTacToe | 2021")
            message.channel.send(e)
        } else if (!select) {
            const e = new MessageEmbed()
                .setTitle("Commandes")
                .setDescription("Pour avoir plus d'information sur les commandes, faites !!help <commande> \n`!!start`")
                .setFooter("TicTacToe | 2021")
            message.channel.send(e)

        } else if (select && select !== "start") {
            return message.channel.send("❌ | Cette commande n'existe pas !")
        }

    }
}