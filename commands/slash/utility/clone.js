const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clone')
        .setDescription('clones the channel'),

    async execute(interaction) {

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
            content: 'are you sure you wanna clone and delete this channel?', 
            components: [row],
            withResponse: true
        });

        const collectorFilter = i => i.user.id === interaction.user.id;
    
            try {
                const confirmation = await response.resource.message.awaitMessageComponent({ filter: collectorFilter, time: 60_000 });
                if (confirmation.customId === 'confirm') {
                    const clone = await interaction.channel.clone();
                    await clone.send('first');
                } else if (confirmation.customId === 'cancel') {
                    await confirmation.update({ content: 'canceled', components: [] });
                }
            } catch {
                await interaction.editReply({ content: 'yo where tf was your response', embeds: [], components: [] });
            }
    }
        
}