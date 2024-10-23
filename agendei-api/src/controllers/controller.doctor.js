import serviceDoctor from "../services/service.doctor.js";

async function Listar(req, res) {
    const name = req.query.name;    
    try {
        const doctors =  await serviceDoctor.Listar(name); 
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function ListarServicos(req, res) {
    const id_doctor = req.params.id_doctor;
    try {
        const services =  await serviceDoctor.ListarServicos(id_doctor); 
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function Inserir(req, res) {
   
    const {name, specialty, icon} = req.body;   
    
    try {
        const doctor =  await serviceDoctor.Inserir(name,specialty, icon); 
        res.status(201).json(doctor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function Editar(req, res) {
    const id_doctor = req.params.id_doctor;    
    const {name, specialty, icon} = req.body;   
    
    try {
        const doctor =  await serviceDoctor.Editar(name,specialty, icon, id_doctor); 
        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function Excluir(req, res) {
    const id_doctor = req.params.id_doctor;     
    
    try {
        const doctor =  await serviceDoctor.Excluir(id_doctor); 
        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default {Listar,ListarServicos, Inserir, Editar, Excluir}
