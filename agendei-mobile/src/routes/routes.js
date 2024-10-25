import { useContext } from "react";
import OpenRoutes from "./openRoutes.jsx";
import PrivateRoutes from "./privateRoutes.jsx";
import { AuthContext } from "../contexts/auth.js";


function Routes() {
    const { user } = useContext(AuthContext);
    return user.id_user ? <PrivateRoutes/> : <OpenRoutes/>
}

export default Routes;