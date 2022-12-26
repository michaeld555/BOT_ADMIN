import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import mysql from 'mysql2';
import Gerencianet from 'gn-api-sdk-node';

dotenv.config();

const connect = () => {
  
  return mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });

}

const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

const options = {
    sandbox: true,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    pix_cert: 'C:/Users/Michae/Documents/ADMIN/cert/homologacao-429014-bot-admin.p12',
};

const gerencianet = new Gerencianet(options);
const keyPix = process.env.KEY_PIX;

const formataNumero = (numero) => {
  let numeroFormatado = numero.toFixed(2);
  numeroFormatado = numeroFormatado.replace('.', ',');
  return numeroFormatado;
}



export { bot, connect, formataNumero, gerencianet, keyPix };