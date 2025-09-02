const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
    data: new SlashCommandBuilder()
        .setName('blackjack')
        .setDescription('or 21 idc'),

    async execute(interaction) {
        const hit = new ButtonBuilder()
            .setCustomId('hit')
            .setLabel('hit')
            .setStyle(ButtonStyle.Danger)

        const stand = new ButtonBuilder()
            .setCustomId('stand')
            .setLabel('stand')
            .setStyle(ButtonStyle.Secondary)

        const row = new ActionRowBuilder()
            .addComponents(hit, stand);
        
        let playerNum = Math.floor(Math.random() * 11) + 1;
        let botNum = Math.floor(Math.random() * 11) + 1;

        const response = await interaction.reply({ 
            content: `**You:** ${playerNum}\n**Bot:** ${botNum}`, 
            components: [row],
            withResponse: true
        });

        const message = await interaction.fetchReply();

        const collectorFilter = i => i.user.id === interaction.user.id;

        const collector = message.createMessageComponentCollector({
            filter: collectorFilter,
            time: 60_000
        });

        collector.on('collect', async confirmation => {
            if (confirmation.customId === 'hit') {
                playerNum = playerNum + Math.floor(Math.random() * 11) + 1;
                if (playerNum > 21) {
                    collector.stop('bust');
                    return await confirmation.update({
                        content: `**You:** ${playerNum}\n**Bot:** ${botNum}\n\nyou lost`, 
                        components: [],
                        withResponse: false
                    });
                }
                await confirmation.update({
                    content: `**You:** ${playerNum}\n**Bot:** ${botNum}`, 
                    components: [row],
                    withResponse: true
                });
            } else if (confirmation.customId === 'stand') {
                while (botNum <= 17) {
                    botNum = botNum + Math.floor(Math.random() * 11) + 1;
                }

                let result = '';
                if (botNum > 21 || playerNum > botNum) {
                    result = 'you win';
                } else if (playerNum === botNum) {
                    result = 'you tied';
                } else {
                    result = 'you lost';
                }

                collector.stop('stand');
                await confirmation.update({
                    content: `**You:** ${playerNum}\n**Bot:** ${botNum}\n\n${result}`, 
                    components: [],
                    withResponse: false
                });
            }
        });

        collector.on('end', async (collected, reason) => {
            if (reason === 'time') {
                await interaction.editReply({ 
                    content: 'You\'re out of time.\n-# That was 1 minute', 
                    components: [] 
                });
            }
        });
    }
}