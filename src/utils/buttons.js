import { getAllPlans  } from "../functions/query.js";
import { formataNumero } from "./config.js";

const optionKeyboard = {

    inline_keyboard: [
        [
          {
            text: '⚙️ Opções',
            callback_data: 'opcoes'
          }
        ]
      ]
  
  };

const paymentKeyboard = {

    inline_keyboard: [
        [
          {
            text: '✅ Já paguei',
            callback_data: 'alredyPayment'
          }
        ],
        [
          {
              text: '❌ Cancelar',
              callback_data: 'cancelPayment'
          }
        ]
      ]
  
  };

const optionsKeyboard = {

    inline_keyboard: [
        [
          {
            text: '🔺 Assinar Plano VIP',
            callback_data: 'vip'
          }
        ],
        [
          {
            text: '🔷 Resgatar Teste Gratis',
            callback_data: 'gratis'
          }
        ]
      ]

};


const plansKeyboard = () => {

    return new Promise((resolve, reject) => {
  
        getAllPlans().then(result => {
  
        let arrayButton = [];
  
          for (let i = 0; i < result.length; i ++) {
            arrayButton.push([
              {
                text: `${result[i].month_duration} mês de acesso - R$ ${formataNumero(result[i].plan_price)}`,
                callback_data: `month${result[i].month_duration}`
              }
            ])
          }
      
        resolve({
          inline_keyboard: arrayButton
        })
  
      }).catch(error => {
        reject(error);
      })
  
    });
  
  };

export { optionKeyboard, paymentKeyboard, optionsKeyboard, plansKeyboard };