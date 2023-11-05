import axios from "axios"

export const baseURL = 'https://api.escuelajs.co/api/v1'



export const axios_instance = axios.create({
    baseURL:baseURL,
    headers:{...axios.defaults.headers}
})