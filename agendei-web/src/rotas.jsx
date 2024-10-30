import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/login/login.jsx";
import Account from "./pages/account/account.jsx";
import Appointments from "./pages/appointments/appointments.jsx"
import AppointmentAdd from "./pages/appoitment-add/appointment-add.jsx";
import Doctors from "./pages/doctors/doctors.jsx";
function Rotas() {

    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/appointments" element={<Appointments/>}/>
            <Route path="/appointments/add" element={<AppointmentAdd/>}/>
            <Route path="/appointments/edit/:id_appointment" element={<AppointmentAdd />} />
            <Route path="/doctors" element={<Doctors/>}/>
        </Routes>
    </BrowserRouter>)
}


export default Rotas;

