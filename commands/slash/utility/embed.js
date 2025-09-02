const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('make a embed and send it to a channel')
        .addStringOption(option =>
            option.setName('channel')
            .setDescription('sends the embed to that channel')
        )
        .addStringOption(option =>
            option.setName('title')
            .setDescription('title of the embed')
        )
        .addStringOption(option =>
            option.setName('description')
            .setDescription('description of the embed')
        )
        .addStringOption(option =>
            option.setName('color')
            .setDescription('color of the embed')
        )
}