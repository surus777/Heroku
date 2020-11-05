try {require("./config") } catch {  }
const http = require("http");
const server = http.createServer(function (request, response) {
    if (request.url == '/pages/about') response.end("it's a web server")
    else response.end("hello world");

});
server.listen(process.env.PORT || 3000, function () {
    console.log("server started");
    bot.log("server started");    

});

const TelegramBot = require('node-telegram-bot-api')

let bot, adminId



bot = new TelegramBot(process.env.TELEGRAM_TOKEN)

bot.on('message', msg =>
    bot.sendMessage(msg.chat.id, 'Whatever your goal is, you can do it!'))

bot.on('polling_error', err =>
    process.env.PORT ? process.exit(1) : console.error(err.message))

adminId = +process.env.ADMIN_CHAT



bot.log = function (...args) {
    args.forEach(arg => {
        if (typeof arg != 'string') arg = '`' + JSON.stringify(arg, null, 2) + '`'
        bot.sendMessage(adminId, arg, { parse_mode: 'markdown' })
    })
}
