const { SlashCommandBuilder, MessageFlags } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('lol'),
    
    async execute(interaction) {
        interaction.reply({ content: 'test', flags: MessageFlags.Ephemeral });
    }

}