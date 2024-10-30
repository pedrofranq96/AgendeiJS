import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.1.36:3001"
});

//IP dinamico, pode mudar a qualquer momento.
export default api;