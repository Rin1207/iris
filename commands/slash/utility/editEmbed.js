const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('editembed')
        .setDescription('edit an embed')
        .addStringOption(option =>
            option.setName('id')
            .setDescription('copy the id of the message with the embed')
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

            if (!interaction.member.permissions.has([PermissionsBitField.Flags.SendMessages])) {
                return await interaction.reply(`you can't even type in this channel`);
            }

            const verify = interaction.options.getString('id');
            const channel = interaction.channel;
            const botMessage = await channel.messages.fetch(verify);

            const title = interaction.options.getString('title');
            let description = interaction.options.getString('description');
            const url = interaction.options.getString('url');
            const author = interaction.options.getString('author');
            const icon = interaction.options.getString('icon');
            const uurl = interaction.options.getString('uurl');
            const color = interaction.options.getString('color');
            const image = interaction.options.getString('image');
            const timestamp = interaction.options.getBoolean('timestamp')
            const thumbnail = interaction.options.getString('thumbnail')

            if (verify.author.id != '1416154166157381713') {
                return await interaction.reply('thats not even a message from me');
            }

            const embed = new EmbedBuilder()
                if (title) {
                    embed.setTitle(title)
                }
                if (description) {
                    description = description.replace(/\\n/g, '\n');
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
            
            await botMessage.edit({ embeds: [embed] });
            await interaction.reply('okay i do edit');
        }
}   
