import axios from "axios"

const api = axios.create({
    baseURL: "https://ga-oliver.000webhostapp.com/database.json"
})

export default api;