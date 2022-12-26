import { paymentKeyboard, plansKeyboard } from "../utils/buttons.js";
import { paymentText, plansText, freeTestText  } from "../utils/text.js";
import { myUserQuery } from "./query.js";
import { createFullPayment } from '../services/gerencianet.js';

const plansCallback = (bot, callbackQuery) => {

    plansKeyboard().then(result => {

        bot.editMessageText( plansText, {
            chat_id: callbackQuery.message.chat.id,
            message_id: callbackQuery.message.message_id,
            reply_markup: result,
            parse_mode: 'html'
            });

    });

}

const freeTestCallback = (bot, callbackQuery) => {

        bot.editMessageText( freeTestText, {
            chat_id: callbackQuery.message.chat.id,
            message_id: callbackQuery.message.message_id,
            parse_mode: 'html'
            }).then((ms) => {console.log(ms)});

}

const paymentCallback = (bot, callbackQuery, plan) => {

    bot.answerCallbackQuery(callbackQuery.id, '⚠ Processando, por favor aguarde');

    createFullPayment(plan, callbackQuery).then(data => {

    bot.editMessageText( paymentText(data), {
        chat_id: callbackQuery.message.chat.id,
        message_id: callbackQuery.message.message_id,
        reply_markup: paymentKeyboard,
        parse_mode: 'html'
        });

    });

}

export { paymentCallback, plansCallback, freeTestCallback }