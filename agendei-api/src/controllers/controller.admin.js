import serviceAdmin from "../services/service.admin.js";



async function InserirAdmin(req, res) {
   
    const {name, email, password} = req.body;   
    
    try {
        const user =  await serviceAdmin.InserirAdmin(name,email, password); 
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function LoginAdmin(req, res) {
   
    const {email, password} = req.body;   
    
    try {
        const user =  await serviceAdmin.LoginAdmin(email, password); 

        if(user.length == 0){
            res.status(401).json({error: "Email ou senha inválida."});
        }
        else {
            res.status(200).json(user);
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function PerfilAdmin(req, res) {    
    
    try {
        const id_user = req.id_user;
        const user =  await serviceAdmin.PerfilAdmin(id_user); 

        if(user.length == 0){
            res.status(401).json({error: "Email ou senha inválida."});
        }
        else {
            res.status(200).json(user);
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function Listar(req, res) {

    const dt_start = req.query.dt_start;
    const dt_end = req.query.dt_end;
    const id_doctor = req.query.id_doctor;

    const appointments = await serviceAdmin.Listar(0, dt_start, dt_end, id_doctor);

    res.status(200).json(appointments);
}





export default {InserirAdmin, LoginAdmin, PerfilAdmin, Listar};
