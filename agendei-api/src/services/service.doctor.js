import repoDoctor from "../repositories/repository.doctor.js";

async function Listar(name) {

    const doctors = await repoDoctor.Listar(name);
    
    return doctors;
}

async function ListarServicos(id_doctor) {

    const services = await repoDoctor.ListarServicos(id_doctor);
    
    return services;
}


async function Inserir(name,specialty, icon) {

    const doctor = await repoDoctor.Inserir(name,specialty, icon);
    
    return doctor;
}

async function Editar(name,specialty, icon, id_doctor) {

    const doctor = await repoDoctor.Editar(name,specialty, icon, id_doctor);
    
    return doctor;
}

async function Excluir(id_doctor) {

    const doctor = await repoDoctor.Excluir(id_doctor);
    
    return doctor;
}


export default {Listar,ListarServicos, Inserir,Editar, Excluir}