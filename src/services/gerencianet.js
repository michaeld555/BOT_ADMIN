import { gerencianet, keyPix, formataValor } from '../utils/config.js';
import { createPaymentQuery } from '../functions/query.js';

const createPayment = async(name, value) => {

    const body = {

	calendario: {
		expiracao: 3600,
	},
	devedor: {
		cpf: '12345678909',
		nome: name,
	},
	valor: {
		original: value,
	},
	chave: keyPix,

    }
  
  const payment = await gerencianet.pixCreateImmediateCharge([], body);

  return payment;

}

const paymentDetail = async(idPayment) => {

    const params = {
        id: idPayment,
    }
    
    const detail = await gerencianet.pixGenerateQRCode(params);

    return detail;

}

const createFullPayment = async(plan, callbackQuery) => {
  
  const payment = await createPayment(`${callbackQuery.from.first_name}`, `${formataValor(plan.plan_price)}`);

  const paymentData = await paymentDetail(payment.loc.id);

  createPaymentQuery(callbackQuery, payment, plan.plan_price);

  return new Promise((resolve, reject) => {
    resolve(paymentData.qrcode)
  });
}


process.on('unhandledRejection', (reason, promise) => {
    console.log(reason)
  });

export { createFullPayment }
