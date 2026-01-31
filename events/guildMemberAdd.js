const { Events, EmbedBuilder } = require('discord.js');

module.exports = {
  name: Events.GuildMemberAdd,
  async execute(member) {
    const welcomeEmbed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle(`Welcome to ${member.guild.name}!`)
      .setDescription(
        `Hey ${member}, welcome to our community! 🎉\n\nMake sure to:\n✅ Read our rules\n✅ Check out our products\n✅ Reach out if you need support`
      )
      .setThumbnail('https://cdn.discordapp.com/attachments/1463223062206873664/1467086058184380456/standard_3.gif?ex=697f19dd&is=697dc85d&hm=e9cb3692b449fe88dac8c4dfe3735c430bafd74577b21111a464442a0afa2e0f&')
      .setImage('https://cdn.discordapp.com/attachments/1463223062206873664/1467086058184380456/standard_3.gif?ex=697f19dd&is=697dc85d&hm=e9cb3692b449fe88dac8c4dfe3735c430bafd74577b21111a464442a0afa2e0f&')
      .setTimestamp();

    try {
      await member.send({ embeds: [welcomeEmbed] });
    } catch (error) {
      console.log(`Could not send DM to ${member.user.tag}`);
    }
  },
};
