const paymentText = (code) => {

    return `<b>-> Pedido de Assinatura criado!</b>\n\n -> Código COPIA e COLA Gerado!\n\n<code>${code}</code>\n\n⚠️ O código acima gerado não é chave aleatória. É chave qr code.\n\n<b>Se estiver com duvida de como pagar clique <a href="">aqui</a> e saiba como pagar.</b>\n\n-> Esse código pix expira em 1 hora\n-> Para copiar CLIQUE no código.\n-> Seu pagamento será reconhecido em 1 minuto.`;

 }

const methodsText = `
_______________________________________\n
<b>ESCOLHA UM DOS METODOS ABAIXO:</b>
_______________________________________`;

const plansText = `
___________________________________________\n
<b>ESCOLHA UM DOS PLANOS ABAIXO:</b>
___________________________________________`;

const freeTestText = `
______________________________________\n
<b>RESPONDA SEU CODIGO DE RESGATE:</b>\n
-> para responder essa mensagem, basta arrasta-lá para a direita
______________________________________`;

export { paymentText, methodsText, plansText, freeTestText };