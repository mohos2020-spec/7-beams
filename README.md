# Winters Stock Discord Bot

A feature-rich Discord bot for managing the Winters Stock server with support ticketing, announcements, and community management.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create a `.env` file in the root directory:**
   ```
   DISCORD_TOKEN=your_bot_token_here
   CLIENT_ID=your_client_id_here
   GUILD_ID=your_server_id_here
   ```

3. **Get your Discord bot token:**
   - Go to [Discord Developer Portal](https://discord.com/developers/applications)
   - Create a new application
   - Go to "Bot" section and create a bot
   - Copy the token to your `.env` file

4. **Start the bot:**
   ```bash
   npm start
   ```

## Features

- **Ticket System**: Create and manage support tickets
- **Announcements**: Post announcements to specific channels
- **Welcome Messages**: Send welcome messages to new members
- **Moderation Commands**: Kick, ban, mute functionality
- **Product Info**: Display product information
- **Restock Notifications**: Ping users for restocks

## Commands

- `/ticket create` - Create a new support ticket
- `/announce <channel> <message>` - Post an announcement
- `/welcome` - Send welcome message to channel
- `/product <name>` - Show product information
