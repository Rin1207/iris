const { SlashCommandBuilder, PermissionsBitField, MessageFlags } = require('discord.js');
const { logChannel } = require('../../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('jail')
        .setDescription('jail that foo')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('select the user')
                .setRequired(true)
        ),

        async execute(interaction) {
            const user = interaction.options.getUser('user');
            const username = user.username;
            const userId = user.id;
            const category = interaction.guild.channels.cache.get(logChannel);

            const channel = interaction.guild.channels.create({ 
                name: `${username}`, 
                parent: `${category}`, 
                permissionOverwrites: [
                    {
                        id: userId,
                        allow: [PermissionsBitField.Flags.ViewChannel]
                    },
                    {
                        id: interaction.guild.id,
                        deny: [PermissionsBitField.Flags.ViewChannel]
                    }
                ]
            })
            await user.roles.add(role => role.name === 'jailed');

            await channel.send({ content: 'yo you are jailed bro' });
        }

}


