import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const secretToken = process.env.SECRET_TOKEN;


function CreateToken(id_user){
    return jwt.sign({id_user}, secretToken, { expiresIn: 99999999});
}

function ValidateToken(req, res, next){
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).json({error: "anouthorized token."});
    }

    const [bearer, token] = authToken.split(" ");
    jwt.verify(token, secretToken, (error, tokenDecoded) =>{
        if(error){
            return res.status(401).json({error: "invalid token."});
        }
        req.id_user = tokenDecoded.id_user;

        next();
    });
}

export default { CreateToken, ValidateToken };
