const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, PermissionBitsField } = require('discord.js');

module.exports = {
     data: new SlashCommandBuilder()
         .setName('jailsetup')
         .setDescription('setups the jail system'),

     async execute(interaction) {
          const jailChannel = interaction.guild.channels.create('jail');
          const jailRole = interaction.guild.roles.create({
            name: 'jail',
          });
     }


    await interaction.reply('created jail channel and jail role');
}
