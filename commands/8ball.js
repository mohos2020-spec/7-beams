module.exports = {
  name: '8ball',
  description: 'Ask the magic 8 ball a question',

  async execute(message, args) {
    const responses = [
      'Yes, definitely! ✅',
      'No, absolutely not! ❌',
      'Maybe... 🤔',
      'Ask again later 🔮',
      'Without a doubt! 💯',
      'Highly unlikely 🚫',
      'The signs point to yes 👍',
      'Don\'t count on it 👎',
      'It is certain 💪',
      'Very doubtful 😕',
    ];

    const response = responses[Math.floor(Math.random() * responses.length)];
    await message.reply(`🔮 ${response}`);
  },
};
