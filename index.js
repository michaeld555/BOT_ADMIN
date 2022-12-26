import { bot } from './src/utils/config.js';
import { startMessage, plansMessage } from './src/functions/message.js';
import { plansCallback, freeTestCallback, paymentCallback } from './src/functions/callback.js';
import { webhook } from './routes/route.js';
import { getAllPlans } from './src/functions/query.js';
import express from 'express';
var app = express();

// Mensagens Diretas
bot.on('message', async (msg) => {

  if (msg.text.startsWith('/start')) {
    startMessage(bot, msg);
  } else if (msg.text.startsWith('/teste')) {
    
  }
});

// Mensagens CallBack
bot.on('callback_query', (callbackQuery) => {

    const action = callbackQuery.data;
    
    if (action === 'opcoes') {

      plansMessage(bot, callbackQuery);

    } else if(action === 'vip'){

      plansCallback(bot, callbackQuery);

    } else if(action === 'gratis'){

      freeTestCallback(bot, callbackQuery);

    }

    getAllPlans().then(result => {

      for (let i = 0; i < result.length; i++) {
        if(action === `month${result[i].month_duration}`){
          paymentCallback(bot, callbackQuery, result[i]);
          console.log(callbackQuery);
        }
      }

    });

});

webhook(app, express, bot);
var porta = process.env.PORT || 8080;
app.listen(porta);