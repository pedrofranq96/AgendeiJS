import serviceUser from "../services/service.user.js";



async function Inserir(req, res) {
   
    const {name, email, password} = req.body;   
    
    try {
        const user =  await serviceUser.Inserir(name,email, password); 
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function Login(req, res) {
   
    const {email, password} = req.body;   
    
    try {
        const user =  await serviceUser.Login(email, password); 

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

async function Perfil(req, res) {    
    
    try {
        const id_user = req.id_user;
        const user =  await serviceUser.Perfil(id_user); 

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



export default {Inserir, Login, Perfil};
