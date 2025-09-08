const { SlashCommandBuilder, EmbedBuilder,  } = require('discord.js');

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
        .addBooleanOption(option =>
            option.setName('timestamp')
            .setDescription('set timestamp?)

        const channel = interaction.options.getChannel('channel');
        const title = interaction.options.getString('title');
        const description = interaction.options.getString('description');
        const color = interaction.options.getString('color');
        const timestamp = interaction.options.getBoolean('timestamp');

        const embed = new EmbedBuilder()
              .setTitle(title)
              .setDescription(description)
              .setColor(color || '0D98BA') 
              .setTimestamp(timestamp)

        channel.send({ embeds: [embed] });

        
}
