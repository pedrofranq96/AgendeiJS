import serviceAppointment from "../services/service.appointment.js";

async function ListarByUser(req, res) {

    const id_user = req.id_user;
    const appointments = await serviceAppointment.Listar(id_user, "", "", "");

    res.status(200).json(appointments);
}

async function Listar(req, res) {

    const dt_start = req.query.dt_start;
    const dt_end = req.query.dt_end;
    const id_doctor = req.query.id_doctor;

    const appointments = await serviceAppointment.Listar(0, dt_start, dt_end, id_doctor);

    res.status(200).json(appointments);
}

async function ListarId(req, res) {

    const id_appointment = req.params.id_appointment;    

    const appointment = await serviceAppointment.ListarId(id_appointment);

    res.status(200).json(appointment);
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

async function InserirAppointmentAdmin(req, res) {
    
    const {id_user, id_doctor, id_service, booking_date, booking_hour} = req.body;   
    
    try {
        const appointment =  await serviceAppointment.Inserir(id_user,id_doctor, id_service, booking_date, booking_hour); 
        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function EditarAppointmentAdmin(req, res) {
    
    const id_appointment = req.params.id_appointment;
    const {id_user, id_doctor, id_service, booking_date, booking_hour} = req.body;   
    
    try {
        const appointment =  await serviceAppointment.Editar(id_user,id_doctor, id_service, booking_date, booking_hour, id_appointment); 
        res.status(200).json(appointment);
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


export default {ListarByUser,Listar, Inserir, Excluir, ListarId, InserirAppointmentAdmin, EditarAppointmentAdmin}