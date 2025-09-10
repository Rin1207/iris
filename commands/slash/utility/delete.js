const { SlashCommandBuilder, PermissionsBitField, ActionRowBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('delete')
        .setDescription('deletes the channel'),

    async execute(interaction) {

        if (!interaction.member.permissions.has([PermissionsBitField.Flags.ManageChannels])) {
            return interaction.reply('you have no perms haha');
        }

        const confirm = new ButtonBuilder()
            .setCustomId('confirm')
            .setLabel('confirm')
            .setEmoji('✅')
            .setStyle(ButtonStyle.Success)

        const cancel = new ButtonBuilder()
            .setCustomId('cancel')
            .setLabel('cancel')
            .setEmoji('❌')
            .setStyle(ButtonStyle.Danger)

        const row = new ActionRowBuilder()
            .addComponents(confirm, cancel)

        const response = await interaction.reply({ 
            content: 'are you sure you wanna delete this channel', 
            components: [row],
            withResponse: true
        });

        const collectorFilter = i => i.user.id === interaction.user.id;
    
            try {
                const confirmation = await response.resource.message.awaitMessageComponent({ filter: collectorFilter, time: 60_000 });
                if (confirmation.customId === 'confirm') {
                    await interaction.channel.delete();
                } else if (confirmation.customId === 'cancel') {
                    await confirmation.update({ content: 'canceled', components: [] });
                }
            } catch {
                await interaction.editReply({ content: 'yo where tf was your response', embeds: [], components: [] });
            }
    }
        
}
