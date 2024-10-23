import serviceAppointment from "../services/service.appointment.js";

async function Listar(req, res) {
    const id_user = req.id_user;    
    try {
        const appointments =  await serviceAppointment.Listar(id_user); 
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function Inserir(req, res) {
    const id_user = req.id_user;
    const {id_doctor, id_service, booking_date, booking_hour} = req.body;   
    
    try {
        const appointment =  await serviceAppointment.Inserir(id_user,id_doctor, id_service, booking_date, booking_hour); 
        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function Excluir(req, res) {    
    try {
        const id_user = req.id_user;   
        const id_appointment = req.params.id_appointment; 

        const appointment =  await serviceAppointment.Excluir(id_user,id_appointment); 
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export default {Listar, Inserir, Excluir}