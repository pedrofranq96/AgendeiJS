import { useEffect, useState } from "react";
import Navibar from "../../components/navibar/navibar";
import api from "../../constants/api";
import { Link, useNavigate } from "react-router-dom";
import Doctor from "../../components/doctor/doctor.jsx";


function Doctors() {
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([]);
    const [idDoctor, setIdDoctor] = useState("");

    function ClickEdit(id_doctor){
        navigate("/appointments/edit/" + id_doctor)
    }

    function ClickDelete(id_doctor){
        console.log("Excluir" + id_doctor);
    }
    async function LoadDoctors(){
        try {
            const response = await api.get("/doctors");

            if (response.data){
                setDoctors(response.data);
            }
            else{
                alert("Erro ao listar médicos. Tente novamente mais tarde.")
            }
        } catch (error) {
                if(error.response?.data.error){
                    if(error.response.status == 401)
                        navigate("/")                    
                }   
                else
                    alert("Erro ao carregar médicos. Tente novamente mais tarde.")
            }
    }

    useEffect(() => {
        LoadDoctors();
    }, [])


    return (<div className="container-fluid mt-page">
        <Navibar/>
        <div className="d-flex justify-content-between align-items-center">
            <div>
                <h2 className="d-inline ">Médicos</h2>
                <Link to="/appointments/add" className="btn btn-outline-primary ms-5 mb-2">Cadastrar médico</Link>
            </div>
        </div>

        <div className="mt-page">
            <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Foto</th>
                            <th scope="col">Nome do médico</th>
                            <th scope="col">Especialidade</th>                            
                            <th scope="col" className="col-buttons"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((ap) => {
                                return <Doctor key={ap.id_doctor} id_doctor={ap.id_doctor} icon={ap.icon} name={ap.name} specialty={ap.specialty}
                                        clickEdit={ClickEdit} clickDelete={ClickDelete}/>
                            })
                        }
                      
                    </tbody>
            </table>
        </div>
    </div>)

}


export default Doctors;