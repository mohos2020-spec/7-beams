const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'View all available commands',

  async execute(message, args) {
    const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle('📚 Winters Stock Bot Commands')
      .setDescription('Here are all the commands available:')
      .setThumbnail('https://cdn.discordapp.com/attachments/1463223062206873664/1467086058184380456/standard_3.gif?ex=697f19dd&is=697dc85d&hm=e9cb3692b449fe88dac8c4dfe3735c430bafd74577b21111a464442a0afa2e0f&')
      .addFields(
        {
          name: '🎮 Fun Commands',
          value: '`!ping` - Check bot latency\n`!8ball` - Ask the magic 8 ball\n`!roll` - Roll a dice\n`!coinflip` - Flip a coin\n`!choose` - Let bot decide\n`!roast` - Get roasted 🔥\n`!pp` - Check pp size',
          inline: false,
        },
        {
          name: '🛍️ Shopping Commands',
          value: '`!products` - View all products\n`!buy <product>` - Purchase a product\n`!price <product>` - Check product price',
          inline: false,
        },
        {
          name: '🎫 Support Commands',
          value: '`!ticket` - Create a support ticket',
          inline: false,
        },
        {
          name: '❓ Other',
          value: '`!help` - Show this message',
          inline: false,
        }
      )
      .setFooter({ text: 'Type a command to use it!' })
      .setTimestamp()
      .setImage('https://cdn.discordapp.com/attachments/1463223062206873664/1467086058184380456/standard_3.gif?ex=697f19dd&is=697dc85d&hm=e9cb3692b449fe88dac8c4dfe3735c430bafd74577b21111a464442a0afa2e0f&');

    await message.reply({ embeds: [embed] });
  },
};
