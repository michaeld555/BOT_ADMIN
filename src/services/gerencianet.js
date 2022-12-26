import { gerencianet, keyPix } from '../utils/config.js';

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

 /* const teste = async() => {
   const t = await createPayment('Michael', '2.50'); 
   //console.log(t);
   return `O texto é ${t.loc.id}`;
} */

process.on('unhandledRejection', (reason, promise) => {
    console.log(reason)
  });
