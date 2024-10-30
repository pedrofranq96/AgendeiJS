import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navibar from "./components/navibar/navibar";
import api from "./constants/api";

function AppointmentAdd() {
    const navigate = useNavigate();
    const { id_appointment } = useParams();
    const [users, setUsers] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [services, setServices] = useState([]);

    const [idUser, setIdUser] = useState("");
    const [idDoctor, setIdDoctor] = useState("");
    const [idService, setIdService] = useState("");
    const [bookingDate, setBookingDate] = useState("");
    const [bookingHour, setBookingHour] = useState("");

    async function LoadUsers() {
        try {
            const response = await api.get("/admin/users");
            if (response.data) {
                setUsers(response.data);
            }
        } catch (error) {
            if (error.response?.data.error) {
                if (error.response.status === 401)
                    return navigate("/");
                alert(error.response?.data.error);
            } else {
                alert("Error loading users");
            }
        }
    }

    async function LoadDoctors() {
        try {
            const response = await api.get("/doctors");
            if (response.data) {
                setDoctors(response.data);
            }
        } catch (error) {
            if (error.response?.data.error) {
                if (error.response.status === 401)
                    return navigate("/");
                alert(error.response?.data.error);
            } else {
                alert("Error loading doctors");
            }
        }
    }

    async function LoadAppointment(id) {
        try {
            const response = await api.get("/admin/appointments/" + id);
            if (response.data) {
                setIdUser(response.data.id_user);
                setIdDoctor(response.data.id_doctor);
                setIdService(response.data.id_service);
                setBookingDate(response.data.booking_date);
                setBookingHour(response.data.booking_hour);
                
                // Load services for the selected doctor
                if (response.data.id_doctor) {
                    LoadServices(response.data.id_doctor);
                }
            }
        } catch (error) {
            if (error.response?.data.error) {
                if (error.response.status === 401)
                    return navigate("/");
                alert(error.response?.data.error);
            } else {
                alert("Error loading appointment");
            }
        }
    }

    async function LoadServices(id) {
        if (!id) return;

        try {
            const response = await api.get("/doctors/" + id + "/services");
            if (response.data) {
                setServices(response.data);
            }
        } catch (error) {
            if (error.response?.data.error) {
                if (error.response.status === 401)
                    return navigate("/");
                alert(error.response?.data.error);
            } else {
                alert("Error loading services");
            }
        }
    }

    async function SaveAppointment() {
        const json = {
            id_user: idUser,
            id_doctor: idDoctor,
            id_service: idService,
            booking_date: bookingDate,
            booking_hour: bookingHour
        };

        try {
            const response = id_appointment > 0 ?
                await api.put("/admin/appointments/" + id_appointment, json)
                :
                await api.post("/admin/appointments", json);

            if (response.data) {
                navigate("/appointments");
            }
        } catch (error) {
            if (error.response?.data.error) {
                if (error.response.status === 401)
                    return navigate("/");
                alert(error.response?.data.error);
            } else {
                alert("Error saving appointment");
            }
        }
    }

    // Load initial data
    useEffect(() => {
        LoadUsers();
        LoadDoctors();
    }, []);

    // Load appointment data after doctors are loaded
    useEffect(() => {
        if (doctors.length > 0 && id_appointment > 0) {
            LoadAppointment(id_appointment);
        }
    }, [doctors, id_appointment]);

    // Load services when doctor changes
    useEffect(() => {
        LoadServices(idDoctor);
    }, [idDoctor]);

    return (
        <>
            <Navibar />
            <div className="container-fluid mt-page">
                <div className="row col-lg-4 offset-lg-4">
                    <div className="col-12 mt-2">
                        <h2>
                            {id_appointment > 0 ? "Edit Appointment" : "New Appointment"}
                        </h2>
                    </div>

                    <div className="col-12 mt-4">
                        <label htmlFor="user" className="form-label">Patient</label>
                        <div className="form-control mb-2">
                            <select name="user" id="user"
                                value={idUser} onChange={(e) => setIdUser(e.target.value)}>
                                <option value="0">Select patient</option>
                                {users.map(u => (
                                    <option key={u.id_user} value={u.id_user}>{u.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="col-12 mt-4">
                        <label htmlFor="doctor" className="form-label">Doctor</label>
                        <div className="form-control mb-2">
                            <select name="doctor" id="doctor"
                                value={idDoctor} onChange={(e) => setIdDoctor(e.target.value)}>
                                <option value="0">Select doctor</option>
                                {doctors.map(d => (
                                    <option key={d.id_doctor} value={d.id_doctor}>{d.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <label htmlFor="service" className="form-label">Service</label>
                        <div className="form-control mb-2">
                            <select name="service" id="service"
                                value={idService} onChange={(e) => setIdService(e.target.value)}>
                                <option value="0">Select service</option>
                                {services.map(s => (
                                    <option key={s.id_service} value={s.id_service}>{s.description}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="col-6 mt-3">
                        <label htmlFor="bookingDate" className="form-label">Date</label>
                        <input type="date" className="form-control" name="bookingDate" id="bookingDate"
                            value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} />
                    </div>

                    <div className="col-6 mt-3">
                        <label htmlFor="bookingHour" className="form-label">Time</label>
                        <div className="form-control mb-2">
                            <select name="bookingHour" id="bookingHour"
                                value={bookingHour} onChange={(e) => setBookingHour(e.target.value)}>
                                <option value="00:00">Time</option>
                                <option value="08:00">08:00</option>
                                <option value="09:00">09:00</option>
                                <option value="09:30">09:30</option>
                                <option value="10:00">10:00</option>
                                <option value="10:30">10:30</option>
                                <option value="11:00">11:00</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-12 mt-4">
                        <div className="d-flex justify-content-end">
                            <Link to="/appointments"
                                className="btn btn-outline-primary me-3">
                                Cancel
                            </Link>
                            <button onClick={SaveAppointment} className="btn btn-primary" type="button">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppointmentAdd;