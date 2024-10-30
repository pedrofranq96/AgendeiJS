
import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";
import controllerUser from "./controllers/controller.user.js";
import controllerAppointment from "./controllers/controller.appointment.js";
import controllerAdmin from "./controllers/controller.admin.js";
import token from "./token.js";

const router = Router();

router.get("/doctors",token.ValidateToken, controllerDoctor.Listar);
router.post("/doctors", token.ValidateToken, controllerDoctor.Inserir);
router.put("/doctors/:id_doctor", token.ValidateToken, controllerDoctor.Editar);
router.delete("/doctors/:id_doctor", token.ValidateToken, controllerDoctor.Excluir);
router.get("/doctors/:id_doctor/services",token.ValidateToken, controllerDoctor.ListarServicos);

router.post("/users/register", controllerUser.Inserir);
router.post("/users/login", controllerUser.Login);
router.get("/users/profile",token.ValidateToken, controllerUser.Perfil);

router.post("/admin/register", controllerAdmin.InserirAdmin);
router.post("/admin/login", controllerAdmin.LoginAdmin);
router.get("/admin/appointments",token.ValidateToken, controllerAppointment.Listar);
router.get("/admin/users",token.ValidateToken, controllerUser.Listar);
router.get("/admin/appointments/:id_appointment",token.ValidateToken, controllerAppointment.ListarId);
router.post("/admin/appointments",token.ValidateToken, controllerAppointment.InserirAppointmentAdmin);
router.put("/admin/appointments/:id_appointment",token.ValidateToken, controllerAppointment.EditarAppointmentAdmin);

router.get("/appointments",token.ValidateToken, controllerAppointment.Listar);
router.post("/appointments",token.ValidateToken, controllerAppointment.Inserir);
router.delete("/appointments/:id_appointment",token.ValidateToken, controllerAppointment.Excluir);

 
export default router;


