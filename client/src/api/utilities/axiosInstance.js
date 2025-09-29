import axios from 'axios';

const DB_URL = import.meta.env.VITE_DB_URL;
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
    withCredentials: true, 
});