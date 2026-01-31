module.exports = {
  name: 'roast',
  description: 'Get roasted! 🔥',

  async execute(message, args) {
    const roasts = [
      'Your code is so bad, it makes legacy code look modern!',
      'You\'re like a human bug report! 🐛',
      'I\'d roast you harder, but I\'d need admin permissions to delete your soul!',
      'Even your NPM packages are deprecated!',
      'Your bugs have bugs! 🪲',
      'You\'re proof that artificial stupidity exists!',
      'Your coding style belongs in a museum... of horrors!',
      'I\'d explain it to you, but I don\'t have that much time!',
      'You\'re so bad at programming, JavaScript renamed itself to avoid association!',
      'Your debugging skills are as good as Internet Explorer\'s security! 💀',
    ];

    const target = message.mentions.users.first() || message.author;
    const roast = roasts[Math.floor(Math.random() * roasts.length)];

    await message.reply(`🔥 **${target.username}**: ${roast}`);
  },
};
