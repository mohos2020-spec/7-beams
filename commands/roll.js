module.exports = {
  name: 'roll',
  description: 'Roll the dice!',

  async execute(message, args) {
    const sides = args[0] ? parseInt(args[0]) : 6;
    
    if (isNaN(sides) || sides < 2 || sides > 100) {
      return message.reply('Please provide a valid number between 2 and 100!');
    }

    const roll = Math.floor(Math.random() * sides) + 1;

    const emojis = ['🎲', '🎯', '✨', '🌟'];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    await message.reply(
      `${emoji} **${message.author.username}** rolled a **${roll}**/${sides}!`
    );
  },
};
