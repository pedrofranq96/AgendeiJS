import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
// const pool = new Pool({
//     connectionString: env("DATABASE_URL")
// });
const pool = new Pool({
    user: process.env.USER,           
    host: process.env.HOST,           
    database: process.env.DATABASE,   
    password: process.env.PASSWORD,  
    port: process.env.PORT,           
});


function query(command, params) {
    return new Promise((resolve, reject) => {
        console.log("Executando SQL:", command); // Log da consulta SQL
        console.log("Com parâmetros:", params);  // Log dos parâmetros
        
        pool.query(command, params) // Certifique-se de usar pool.query diretamente
            .then(result => resolve(result.rows))
            .catch(error => {
                console.error("Erro na consulta:", error); // Log de erro
                reject(error);
            });
    });
}


const db = {
    all: (command, params) => query(command, params, 'query'),
    get: (command, params) => query(command, params, 'query'),
    run: (command, params) => query(command, params, 'query')
};

export { db, query };