module.exports = {
  name: 'ping',
  description: 'Check bot latency',
  
  async execute(message, args) {
    const sent = await message.reply('Pinging...');
    const latency = sent.createdTimestamp - message.createdTimestamp;
    
    await sent.edit(
      `🏓 Pong! Latency: ${latency}ms, API Latency: ${message.client.ws.ping}ms`
    );
  },
};
