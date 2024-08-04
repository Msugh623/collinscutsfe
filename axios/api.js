import axios from "axios";

const api = axios.create({
    baseURL: 'https://collinscuts.onrender.com',
})

export default api