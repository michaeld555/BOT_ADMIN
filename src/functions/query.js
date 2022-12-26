import { connect } from "../utils/config.js";

const startBot = (msg) => {

    const connection = connect();
    const selectQuery = `SELECT * FROM users WHERE chat_id = ${msg.chat.id} LIMIT 1`;

    connection.query(selectQuery, (error, results) => {
    if (error) {
        console.log(error);
    } else {
        // Verifica se houve algum resultado
        if (results.length > 0) {
        // Se houver, salva o resultado em uma constante
        const result = results[0];
        console.log(result);

        } else {
        // Se não houver, faz o INSERT
        const connection = connect();
        const insertQuery = `INSERT INTO users (chat_id, full_name, created_at) VALUES (${msg.chat.id}, '${msg.from.first_name}', NOW())`;
        connection.execute(insertQuery, (error, results) => {
            if (error) {
            console.log(error);
            } else {
            console.log(results);
            }
        });
        
        connection.end();

        }
    }
    });

    connection.end();

}

const getAllPlans = () => {
     
    const connection = connect();
    const getQuery = `SELECT * FROM plans`;

    return new Promise((resolve, reject) => {
    connection.execute(getQuery, (error, results) => {
        if (error) {
        reject(error);
        } else {
          console.log(results);
          resolve(results);
        }
    });

    connection.end();
  });

}

const myUserQuery = (id) => {

    const connection = connect();
    const selectQuery = `SELECT * FROM users WHERE chat_id = ${id} LIMIT 1`;

    return new Promise((resolve, reject) => {
        connection.query(selectQuery, (error, results) => {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            resolve(results[0]);
          }
        });
    
        connection.end();
      });

}

const createPaymentQuery = (callbackQuery, payment, value) => {

    const connection = connect();
    const insertQuery = `INSERT INTO payments (id_payment, txid, chat_id, message_id, user_id, value, created_at) VALUES ('${payment.loc.id}', '${payment.txid}', ${callbackQuery.message.chat.id}, '${callbackQuery.message.message_id}', '${callbackQuery.from.id}', ${value}, NOW())`;

    connection.execute(insertQuery, (error, results) => {
        if (error) {
        console.log(error);
        } else {
        console.log(results);
        }
    });

    connection.end();

}

export { getAllPlans, startBot, myUserQuery, createPaymentQuery };