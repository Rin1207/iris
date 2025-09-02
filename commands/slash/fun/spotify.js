const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { spotifyId, spotifySecret } = require('../../../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('spotify')
        .setDescription('Gives you a link of a song')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('GIVE NAME')
                .setRequired(true)
        ),
    
    async execute(interaction) {
        const fetchLink = interaction.options.getString('name');


    }
}