const { Events, EmbedBuilder, PermissionsBitField } = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        
        if (!message.guild || !message.content.startsWith(prefix)) return;
        
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === 'jit') {
            if (args[0] === 'rang') {
                await message.channel.send('jitterang');
            } else {
                await message.channel.send('what');
            }
        }
    }
}
