module.exports = {
  name: 'pp',
  description: 'Check your pp size! 📏 (Just for fun!)',

  async execute(message, args) {
    const user = message.mentions.users.first() || message.author;
    
    // Generate a "pp size" based on user ID for consistency
    const size = Math.floor((user.id % 100) / 10) + 1;
    const bar = '█'.repeat(size) + '░'.repeat(10 - size);
    
    const messages = [
      `📏 ${user.username}'s pp size: **${size}/10**\n\`[${bar}]\``,
      `🍆 ${user.username}'s size: **${size}cm**\n\`[${bar}]\``,
      `😏 Damn ${user.username}! You got a **${size}/10**!\n\`[${bar}]\``,
    ];

    await message.reply(messages[Math.floor(Math.random() * messages.length)]);
  },
};
