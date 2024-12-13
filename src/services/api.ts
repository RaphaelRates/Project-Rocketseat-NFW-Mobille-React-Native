import axios from "axios";

export const api = axios.create({
    baseURL: "http://26.144.58.99:3333",
    timeout: 5000
})