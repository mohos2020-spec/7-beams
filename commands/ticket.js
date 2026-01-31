const { ChannelType } = require('discord.js');

module.exports = {
  name: 'ticket',
  description: 'Create a support ticket',

  async execute(message, args) {
    const reason = args.join(' ') || 'No reason provided';
    const user = message.author;
    const guild = message.guild;

    try {
      // Create a private channel for the ticket
      const ticketChannel = await guild.channels.create({
        name: `ticket-${user.username}`,
        type: ChannelType.GuildText,
        topic: `Support ticket for ${user.username} - Reason: ${reason}`,
        permissionOverwrites: [
          {
            id: guild.id,
            deny: ['ViewChannel'],
          },
          {
            id: user.id,
            allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory'],
          },
        ],
      });

      // Send welcome message in ticket
      await ticketChannel.send(
        `Welcome ${user}! A support team member will assist you shortly.\n\n**Reason:** ${reason}`
      );

      // Reply to user
      await message.reply({
        content: `✅ Ticket created! Check ${ticketChannel}`,
      });
    } catch (error) {
      console.error(error);
      await message.reply({
        content: '❌ Failed to create ticket. Please try again.',
      });
    }
  },
};
