const TelegramBot = require('node-telegram-bot-api');
const express = require('express')
const dotenv = require('dotenv')
const app = express();

dotenv.config();


app.get("/", (req, res) => {
    res.send("Bot is alive")
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})


// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;

// Your web app URL
const webAppUrl = 'http://t.me/HamstercalciBot/app';
const channelUrl = 'https://t.me/hamstercalci';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });


// Listen for /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Message to send when user starts the bot
    const message = `🐹 Hamster Calci - Best Card Finder\n\n`
        + `Want to dominate the competition? 🚀 Unleash the power of the Card Calculator\n\n`
        + `✨ Features:\n\n`
        + `🔍 Effortlessly discover top-performing cards\n`
        + `📈 Calculate card levels, ROI, and effectiveness\n`
        + `💡 Optimize your strategy and outsmart your opponents\n`
        + `📊 Track your progress and watch your profits soar\n\n`
        + `[How to use?](https://t.me/hamstercalci/6)`;

    // Inline keyboard with a button to launch your web app
    const keyboard = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🐹 Launch Hamster Calci 🐹', url: webAppUrl }
                ],
                [
                    { text: 'Subscribe to channel', url: channelUrl }
                ]
            ]
        },
        parse_mode: 'Markdown',
        disable_web_page_preview: true
    };

    // Send message with inline keyboard
    bot.sendMessage(chatId, message, keyboard);
});

module.exports = app;