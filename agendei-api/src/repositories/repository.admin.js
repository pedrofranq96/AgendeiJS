
import { query } from '../database/postgreeSql.js';


async function InserirAdmin(name, email, password){
  

    const sql = "INSERT INTO admins (name, email, password) VALUES ($1, $2, $3) RETURNING id_admin;";
    const params = [name, email, password]; 
    
    try {
        const result = await query(sql, params);
        return result[0];
    } catch (error) {
        console.error("Erro ao adicionar admin:", error);
        throw error; 
    }

}

async function ListarPorEmailAdmin(email) {
    const sql = "SELECT * FROM admins WHERE email = $1;";    
    
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

async function Listar(id_user, dt_start, dt_end, id_doctor) {

    let filtro = [];

    let sql = `select a.id_appointment, s.description as service, 
    d.name as doctor, d.specialty,
   a.booking_date, a.booking_hour, u.name as user, ds.price
from appointments a
join services s on (s.id_service = a.id_service)
join doctors d on (d.id_doctor = a.id_doctor)
join users u on (u.id_user = a.id_user)
join doctors_services ds on (ds.id_doctor = a.id_doctor and 
                        ds.id_service = a.id_service)
where a.id_appointment > 0 `;

    if (id_user) {
        filtro.push(id_user);
        sql = sql + "and a.id_user = ? "
    }

    if (dt_start) {
        filtro.push(dt_start);
        sql = sql + "and a.booking_date >= ? "
    }

    if (dt_end) {
        filtro.push(dt_end);
        sql = sql + "and a.booking_date <= ? "
    }

    if (id_doctor) {
        filtro.push(id_doctor);
        sql = sql + "and a.id_doctor = ? "
    }

    sql = sql + "order by a.booking_date, a.booking_hour";

    const appointments = await query(sql, filtro);

    return appointments;
}



async function PerfilAdmin(id_user) {

    let sql = "SELECT id_user, name, email  FROM users where id_user = $1 ";

    const user = await query(sql, [id_user]);
    return user[0];
}


export default {InserirAdmin, ListarPorEmailAdmin, PerfilAdmin, Listar};