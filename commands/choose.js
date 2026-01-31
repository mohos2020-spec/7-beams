module.exports = {
  name: 'choose',
  description: 'Can\'t decide? Let the bot choose for you!',

  async execute(message, args) {
    if (args.length < 2) {
      return message.reply('❌ Please provide at least 2 options separated by spaces!');
    }

    const choice = args[Math.floor(Math.random() * args.length)];
    await message.reply(`🤔 I choose **${choice}**!`);
  },
};
