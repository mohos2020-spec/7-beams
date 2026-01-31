const { EmbedBuilder } = require('discord.js');
const products = require('../data/products.js');

module.exports = {
  name: 'products',
  description: 'View all available products and prices',

  async execute(message, args) {
    const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle('🛍️ Winters Stock - Product Catalog')
      .setDescription('Check out our amazing products!')
      .setThumbnail('https://cdn.discordapp.com/attachments/1463223062206873664/1467086058184380456/standard_3.gif?ex=697f19dd&is=697dc85d&hm=e9cb3692b449fe88dac8c4dfe3735c430bafd74577b21111a464442a0afa2e0f&')
      .setTimestamp();

    let totalValue = 0;
    products.forEach((product, index) => {
      embed.addFields({
        name: `${product.emoji} ${product.name}`,
        value: `**$${product.price.toFixed(2)}**\n${product.description}`,
        inline: false,
      });
      totalValue += product.price;
    });

    embed.setFooter({ text: `Total catalog value: $${totalValue.toFixed(2)}` })
      .setImage('https://cdn.discordapp.com/attachments/1463223062206873664/1467086058184380456/standard_3.gif?ex=697f19dd&is=697dc85d&hm=e9cb3692b449fe88dac8c4dfe3735c430bafd74577b21111a464442a0afa2e0f&');

    await message.reply({ embeds: [embed] });
  },
};
