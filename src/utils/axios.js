import axios from "axios";
import { useAuth } from "../contexts/AuthContext";


const axiosInstance = axios.create({
    baseURL : `http://localhost:5000/api`
})


export default axiosInstance