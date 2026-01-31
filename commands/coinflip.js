module.exports = {
  name: 'coinflip',
  description: 'Flip a coin!',

  async execute(message, args) {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    const emoji = result === 'Heads' ? '🪙' : '💰';

    await message.reply(`${emoji} **${result}!**`);
  },
};
