import { query } from '../database/postgreeSql.js';

async function Listar(name) {
    let filtro = [];
    console.log("Nome passado para Listar:", name);

    let sql = "SELECT * FROM doctors ";

    if (name) {
        sql += "WHERE name ILIKE $1 "; 
         filtro.push(`%${name}%`);
    }

    sql += " ORDER BY name";

    const doctors = await query(sql, filtro);
    return doctors;
}

async function ListarServicos(id_doctor) {
    
   
    let sql = `select ds.id_service, s.description, ds.price from doctors_services ds
	           join  services s on s.id_service = ds.id_service
	           where id_doctor =  $1 `;   



    const services = await query(sql, [id_doctor]);
    return services;
}

async function Inserir(name,specialty, icon){
  

    const sql = "INSERT INTO doctors (name, specialty, icon) VALUES ($1, $2, $3) RETURNING id_doctor;";
    const params = [name, specialty, icon]; 
    
    try {
        const result = await query(sql, params);
        return result[0];
    } catch (error) {
        console.error("Erro ao adicionar médico:", error);
        throw error; 
    }

}

async function Editar(name, specialty, icon, id_doctor) {

    const sql = "UPDATE doctors SET name = $1, specialty = $2, icon = $3 WHERE id_doctor = $4;";
    const params = [name, specialty, icon, id_doctor]; 
    
    try {
        await query(sql, params);

        return { id_doctor }; 
    } catch (error) {
        console.error("Erro ao editar médico:", error);
        throw error; 
    }
}

async function Excluir(id_doctor) {

    const sql = "Delete from doctors WHERE id_doctor = $1;";    
    
    try {
        await query(sql, [id_doctor]);

        return { id_doctor }; 
    } catch (error) {
        console.error("Erro ao editar médico:", error);
        throw error; 
    }
}


export default { Listar,ListarServicos, Inserir, Editar, Excluir };