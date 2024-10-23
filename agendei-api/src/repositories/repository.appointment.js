import { query } from '../database/postgreeSql.js';

async function Listar(id_user) {

    let sql = `select a.id_appointment, s.description as service, a.booking_date, a.booking_hour, d.name,d.specialty,u.name as user, ds.price  from appointments a
               join services s on a.id_service = s.id_service
               join doctors d on a.id_doctor = d.id_doctor
               join users u on a.id_user = u.id_user
               join doctors_services ds on a.id_doctor = ds.id_doctor and a.id_service = ds.id_service
               where a.id_user = $1
               order by a.booking_date, a.booking_hour`;
   

    const appointments = await query(sql, [id_user]);
    return appointments;
}

async function Inserir(id_user,id_doctor, id_service, booking_date, booking_hour){
  

    let sql = "INSERT INTO appointments (id_user,id_doctor, id_service, booking_date, booking_hour) VALUES ($1, $2, $3, $4, $5) RETURNING id_appointment;";
    const params = [id_user,id_doctor, id_service, booking_date, booking_hour]; 
    
    try {
        const result = await query(sql, params);
        return result[0];
    } catch (error) {
        console.error("Erro ao adicionar agendamento:", error);
        throw error; 
    }

}

async function Excluir(id_user, id_appointment){

    let sql = "DELETE from appointments WHERE id_appointment = $1 AND id_user = $2;";
    const params = [id_appointment,id_user]; 
    
    try {
        await query(sql, params);
        return {id_appointment}
    } catch (error) {
        console.error("Erro ao adicionar agendamento:", error);
        throw error; 
    }

}

export default {Listar,Inserir, Excluir};