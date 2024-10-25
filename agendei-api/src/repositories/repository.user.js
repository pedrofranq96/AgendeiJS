
import { query } from '../database/postgreeSql.js';


async function Inserir(name, email, password){
  

    const sql = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id_user;";
    const params = [name, email, password]; 
    
    try {
        const result = await query(sql, params);
        return result[0];
    } catch (error) {
        console.error("Erro ao adicionar usuário:", error);
        throw error; 
    }

}

async function ListarPorEmail(email) {
    const sql = "SELECT * FROM users WHERE email = $1;";    
    
    try {
      
        const user = await query(sql, [email]); 

        if (user.length === 0) {
            return null; 
        } else {
            return user[0]; 
        }
    } catch (error) {
        console.error("Erro ao buscar usuário por email:", error);
        throw error; 
    }
} 


async function Perfil(id_user) {

    let sql = "SELECT id_user, name, email  FROM users where id_user = $1 ";

    const user = await query(sql, [id_user]);
    return user[0];
}


export default {Inserir, ListarPorEmail, Perfil};