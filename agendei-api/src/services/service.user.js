import bcrypt from 'bcrypt';
import repoUser from '../repositories/repository.user.js';
import token from '../token.js';



async function Inserir(name, email, password) {

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await repoUser.Inserir(name, email, hashPassword);
    user.token = token.CreateToken(user.id_user);
    return user;
}


async function Login(email, password) {
    const user = await repoUser.ListarPorEmail(email); 
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

async function Perfil(id_user){
    const user = await repoUser.Perfil(id_user);
    return user;
}

export default {Inserir, Login,Perfil};