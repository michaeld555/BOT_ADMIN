import { bot } from './src/utils/config.js';
//import { startMessage } from './src/functions/message.js';
import { webhook } from './routes/route.js';
import express from 'express';
var app = express();

// Mensagens Diretas
bot.on('message', (msg) => {

  if (msg.text.startsWith('/start')) {
    bot.sendMessage(msg.chat.id, 'Ola mundo', {});
  }
    
});

// Mensagens CallBack
bot.on('callback_query', (callbackQuery) => {

    const action = callbackQuery.data;
    
    if (action === 'faq') {

      faqCallback(bot, callbackQuery);

    }

});

webhook(app, express, bot);
var porta = process.env.PORT || 8080;
app.listen(porta);