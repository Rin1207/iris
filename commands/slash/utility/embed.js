const { SlashCommandBuilder, EmbedBuilder, SelectMenuOptionBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('make a embed and send it to a channel')
        .addChannelOption(option =>
            option.setName('channel')
            .setDescription('send it to the channel')
            .setRequired(true)
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
        .addStringOption(option =>
            option.setName('thumbnail')
            .setDescription('thumbnailllllllllllllllll')
        )
        .addStringOption(option =>
            option.setName('image')
            .setDescription('set an image')
        )
        .addStringOption(option => 
            option.setName('url')
            .setDescription('set a url for his title')
        )
        .addStringOption(option =>
            option.setName('author')
            .setDescription('author crap')
            .addChoices(
                { name: 'icon', value: 'icon' },
                { name: 'url', value: 'uurl' }
            )
        )
        .addBooleanOption(option =>
            option.setName('timestamp')
            .setDescription('add a timestamp or nah')
        ),


        async execute(interaction) {
            const channel = interaction.options.getChannel('channel');
            const title = interaction.options.getString('title');
            const description = interaction.options.getString('description');
            const url = interaction.options.getString('url');
            const author = interaction.options.getString('author');
            const icon = interaction.options.getString('icon');
            const uurl = interaction.options.getString('uurl');
            const color = interaction.options.getString('color');
            const image = interaction.options.getString('image');
            const timestamp = interaction.options.getBoolean('timestamp')

            const embed = new EmbedBuilder()
                if (title) {
                    embed.setTitle(title)
                }
                if (description) {
                    embed.setDescription(description)
                }
                if (author) {
                    embed.setAuthor({
                        name: author,
                        iconURL: icon || undefined,
                        url: uurl || undefined
                    })
                }
                if (color) {
                    embed.setColor(color)
                }
                if (image) {
                    embed.setImage(image)
                }
                if (url) {
                    embed.setURL(url)
                }
                if (timestamp) {
                    embed.setTimestamp()
                }
                if (thumbnail) {
                    embed.setThumbnail(thumbnail)
                }
            
            await channel.send({ embeds: [embed] });
            await interaction.reply('okay i do embed');
        }
}   
