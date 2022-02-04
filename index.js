const TelegramApi = require('node-telegram-bot-api')

const request = require('request')

const token = '5155916136:AAF6kNhRY-nK0dVjVkCB0pMSH35G4x9u-Ck'

const bot = new TelegramApi(token, {polling: true})

bot.onText(/\/start/, async (msg) =>{
    console.log(msg)
    
})