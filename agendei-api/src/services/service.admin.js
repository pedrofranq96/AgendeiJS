import bcrypt from 'bcrypt';
import repoAdmin from '../repositories/repository.admin.js';
import token from '../token.js';



async function InserirAdmin(name, email, password) {

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await repoAdmin.InserirAdmin(name, email, hashPassword);
    user.token = token.CreateToken(user.id_user);
    return user;
}


async function LoginAdmin(email, password) {
    const user = await repoAdmin.ListarPorEmailAdmin(email); 
    if (!user) {
        return [];
    } else {
        
        if (await bcrypt.compare(password, user.password)) {
            delete user.password;
            user.token = token.CreateToken(user.id_user);
            return user; 
        } else {
            return [];
        }
    }
} 

async function PerfilAdmin(id_user){
    const user = await repoAdmin.PerfilAdmin(id_user);
    return user;
}

async function Listar(id_user, dt_start, dt_end, id_doctor) {

    const appointments = await repoAdmin.Listar(id_user, dt_start, dt_end, id_doctor);

    return appointments;
}

export default {InserirAdmin, LoginAdmin,PerfilAdmin, Listar};