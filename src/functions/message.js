import { paymentKeyboard, optionsKeyboard, optionKeyboard } from "../utils/buttons.js";
import { methodsText } from "../utils/text.js";
import { startBot } from '../functions/query.js';

const startMessage = (bot, msg) => {

    const media = 'https://michaelneves.tech/teste.png';
    startBot(msg);

    bot.sendPhoto( msg.chat.id, media, {
        caption: `• Bem-vindo ${ msg.from.first_name }\n\n • Aqui ficará o texto`,
        reply_markup: optionKeyboard,
        parse_mode: 'html'
        });
}

const plansMessage = (bot, callbackQuery) => {

    bot.sendMessage(callbackQuery.message.chat.id, methodsText, {
        reply_markup: optionsKeyboard,
        parse_mode: 'html'
        });

}

export { startMessage, plansMessage };