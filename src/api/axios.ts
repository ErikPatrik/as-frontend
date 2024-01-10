import axios from "axios"

export const req = axios.create({
    baseURL: 'https://discord-manager-rhxv.onrender.com/',
    headers: {
        'Content-Type': 'application/json'
    }
})