import "./login.css";
import logo from "../../assets/logo.png";
import fundo from "../../assets/fundo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../constants/api.js";

function Login(){

    const navigate = useNavigate();
    const [email, setEmail] = useState("admin@email.com");
    const [password, setPassword] = useState("12345");
    const [ msg, setMsg] = useState("");


    async function ExecuteLogin(){
        setMsg("");
        try {
            const response = await api.post("/admin/login", { email, password });

            if (response.data){
                localStorage.setItem("sessionToken", response.data.token);
                localStorage.setItem("sessionUserId", response.data.id_admin);
                localStorage.setItem("sessionEmail", response.data.email);
                localStorage.setItem("sessionName", response.data.name);
                api.defaults.headers.common['Authorization'] = "Bearer " + response.data.token;
                navigate("/appointments")
            } else {
                setMsg("Erro ao efetuar login. Tente novamente mais tarde.");
            }

        } catch (error) {
            if(error.response?.data.error)
                setMsg(error.response?.data.error)
            else
                setMsg("Erro ao efetuar login. Tente novamente mais tarde.")
        }
    }


    return (<div className="row">
        <div className="col-sm-5 d-flex justify-content-center align-items-center text-center">
           <form className="form-signin">
                <img src={logo} className="logo mb-4"/>
                <h5 className="mb-5">Gerencie seus agendamentos de forma descomplicada.</h5>
                <h5 className="mb-2 text-secondary">Acesse sua conta</h5>


                <div className="mt-4">
                    <input type="email" placeholder="email" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mt-1">
                    <input type="password" placeholder="Senha" value={password} className="form-control" onChange={(p) => setPassword(p.target.value)}/>
                </div>
                <div className="mt-4 mb-5">
                    <button className="btn btn-primary w-100" onClick={ExecuteLogin} type="button">Login</button>
                </div>
                {
                    msg.length > 0 && <div className="alert alert-danger" role="alert">{msg}</div> 
                }
                <div>
                    <span className="me-1">Não tenho uma conta.</span>
                    <Link to="/account">Criar conta agora</Link>
                </div>
           </form>
        </div>

        <div className="col-sm-7">
           <img src={fundo} className="background-login"/>
        </div>
        
    </div>)
}

export default Login;