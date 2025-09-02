const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log("okay iris is online");
        client.user.setPresence({ activities: [{ name: '🔗 https://rrin.lol/', type: ActivityType.Custom }] });
	},
};
