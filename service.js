import axios from "axios"

const api = axios.create({
    baseURL: "http://2cd2c51da638.ngrok.io/Users"
})

export default api;