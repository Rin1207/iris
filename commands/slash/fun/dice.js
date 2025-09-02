/*

const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dice')
        .setDescription('dice')
        .addStringOption(option =>
            option.setName('hl')
                .setDescription('higher or lower')
                .setRequired(true)
                .addChoices(
                    { name: 'Higher', value: 'higher' },
                    { name: 'Lower', value: 'lower' },
                )
            .addIntegerOption(option =>
                option.setName('number')
                    .setDescription('select a number 1-12')
                    .setRequired(true)
            )
        ),
    
    async execute(interaction) {
        const hilo = interaction.options.getString('hl');
        const num = interaction.options.getInteger('number');

        const botNum = Math.floor(Math.random())
    }
}

*/