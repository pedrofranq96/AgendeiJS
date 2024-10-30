import { query } from '../database/postgreeSql.js';

// async function Listar(id_user) {

//     let sql = `select a.id_appointment, s.description as service, a.booking_date, a.booking_hour, d.name,d.specialty,u.name as user, ds.price  from appointments a
//                join services s on a.id_service = s.id_service
//                join doctors d on a.id_doctor = d.id_doctor
//                join users u on a.id_user = u.id_user
//                join doctors_services ds on a.id_doctor = ds.id_doctor and a.id_service = ds.id_service
//                where a.id_user = $1
//                order by a.booking_date, a.booking_hour`;
   

//     const appointments = await query(sql, [id_user]);
//     return appointments;
// }



async function Listar(id_user, dt_start, dt_end, id_doctor) {

    const dataFormatStart = dt_start ? dt_start.split('/').reverse().join('-') : ''; 
    const dataFormatEnd = dt_end ? dt_end.split('/').reverse().join('-') : '';

   
    let sql = `select a.id_appointment, s.description as service, 
    d.name as doctor, d.specialty,
   a.booking_date, a.booking_hour, u.name as user, ds.price, a.id_doctor, a.id_service , a.id_user
from appointments a
join services s on (s.id_service = a.id_service)
join doctors d on (d.id_doctor = a.id_doctor)
join users u on (u.id_user = a.id_user)
join doctors_services ds on (ds.id_doctor = a.id_doctor and 
                        ds.id_service = a.id_service)
where a.id_appointment > 0 `;

if (id_user) {
    sql += ` and a.id_user = ${id_user}`;
}
if (dataFormatStart) {
    sql += ` and a.booking_date >= '${dataFormatStart}'`;  
}
if (dataFormatEnd) {
    sql += ` and a.booking_date <= '${dataFormatEnd}'`;
}
if (id_doctor) {
    sql += ` and a.id_doctor = ${id_doctor}`;
}

    sql = sql + " order by a.booking_date, a.booking_hour";

    const appointments = await query(sql);

    return appointments;
}

async function ListarId(id_appointment) {
    let sql = `select a.id_appointment, s.description as service, 
        d.name as doctor, d.specialty,
        a.booking_date, a.booking_hour, u.name as user, ds.price, a.id_doctor, a.id_service, a.id_user
    from appointments a
    join services s on (s.id_service = a.id_service)
    join doctors d on (d.id_doctor = a.id_doctor)
    join users u on (u.id_user = a.id_user)
    join doctors_services ds on (ds.id_doctor = a.id_doctor and 
                            ds.id_service = a.id_service)
    where a.id_appointment = ${id_appointment}`;

    const appointments = await query(sql);
    return appointments;
}

async function Editar(id_user,id_doctor, id_service, booking_date, booking_hour, id_appointment){
  

    let sql = `
        UPDATE appointments SET id_user = $1, id_doctor = $2, id_service = $3, booking_date = $4, booking_hour = $5    WHERE id_appointment = $6;`;
    const params = [id_user,id_doctor, id_service, booking_date, booking_hour, id_appointment]; 
    
    try {
        await query(sql, params);
        return { id_appointment };
    } catch (error) {
        console.error("Erro ao editar agendamento:", error);
        throw error; 
    }

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

export default {Listar,Inserir, Excluir, ListarId, Editar};