const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('minesweeper')
        .setDescription('beep beep beep')
        .addIntegerOption(option =>
            option.setName('number')
                .setDescription('pick a number')
                .setMinValue(1)
                .setMaxValue(24)
                .setRequired(true)
        ),

    async execute(interaction) {
        const num = interaction.options.getInteger('number');

        const button1 = new ButtonBuilder()
            .setCustomId('button1')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button2 = new ButtonBuilder()
            .setCustomId('button2')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button3 = new ButtonBuilder()
            .setCustomId('button3')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button4 = new ButtonBuilder()
            .setCustomId('button4')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button5 = new ButtonBuilder()
            .setCustomId('button5')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button6 = new ButtonBuilder()
            .setCustomId('button6')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button7 = new ButtonBuilder()
            .setCustomId('button7')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button8 = new ButtonBuilder()
            .setCustomId('button8')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button9 = new ButtonBuilder()
            .setCustomId('button9')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button10 = new ButtonBuilder()
            .setCustomId('button10')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button11 = new ButtonBuilder()
            .setCustomId('button11')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button12 = new ButtonBuilder()
            .setCustomId('button12')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button13 = new ButtonBuilder()
            .setCustomId('button13')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button14 = new ButtonBuilder()
            .setCustomId('button14')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button15 = new ButtonBuilder()
            .setCustomId('button15')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button16 = new ButtonBuilder()
            .setCustomId('button16')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button17 = new ButtonBuilder()
            .setCustomId('button17')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button18 = new ButtonBuilder()
            .setCustomId('button18')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button19 = new ButtonBuilder()
            .setCustomId('button19')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button20 = new ButtonBuilder()
            .setCustomId('button20')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button21 = new ButtonBuilder()
            .setCustomId('button21')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button22 = new ButtonBuilder()
            .setCustomId('button22')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button23 = new ButtonBuilder()
            .setCustomId('button23')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button24 = new ButtonBuilder()
            .setCustomId('button24')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const button25 = new ButtonBuilder()
            .setCustomId('button25')
            .setEmoji('❔')
            .setStyle(ButtonStyle.Secondary)

        const row1 = new ActionRowBuilder()
            .addComponents(button1, button2, button3, button4, button5)

        const row2 = new ActionRowBuilder()
            .addComponents(button6, button7, button8, button9, button10)

        const row3 = new ActionRowBuilder()
            .addComponents(button11, button12, button13, button14, button15)

        const row4 = new ActionRowBuilder()
            .addComponents(button16, button17, button18, button19, button20)

        const row5 = new ActionRowBuilder()
            .addComponents(button21, button22, button23, button24, button25)
        
        const bombSet = new Set();
        while (bombSet.size < num) {
            const bomb = Math.floor((Math.random() * 25) + 1); 
            bombSet.add(bomb);
        }
        const totalArr = [...bombSet];
        console.log(totalArr);

        interaction.reply({content: `**Minesweeper** - ${num} Bombs`, components: [row1, row2, row3, row4, row5] })
    }
}