const { EmbedBuilder } = require('discord.js');
const products = require('../data/products.js');

module.exports = {
  name: 'price',
  description: 'Check the price of a product',

  async execute(message, args) {
    if (!args[0]) {
      const productList = products.map(p => p.name).join(', ');
      return message.reply(`❌ Please specify a product!\nAvailable: ${productList}`);
    }

    const productName = args.join(' ');
    const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());

    if (!product) {
      return message.reply('❌ Product not found!');
    }

    const embed = new EmbedBuilder()
      .setColor('#ffff00')
      .setTitle(`💰 Price Check`)
      .setThumbnail('https://cdn.discordapp.com/attachments/1463223062206873664/1467086058184380456/standard_3.gif?ex=697f19dd&is=697dc85d&hm=e9cb3692b449fe88dac8c4dfe3735c430bafd74577b21111a464442a0afa2e0f&')
      .addFields(
        { name: 'Product', value: `${product.emoji} ${product.name}`, inline: false },
        { name: 'Price', value: `**$${product.price.toFixed(2)}**`, inline: false }
      )
      .setImage('https://cdn.discordapp.com/attachments/1463223062206873664/1467086058184380456/standard_3.gif?ex=697f19dd&is=697dc85d&hm=e9cb3692b449fe88dac8c4dfe3735c430bafd74577b21111a464442a0afa2e0f&');

    await message.reply({ embeds: [embed] });
  },
};
