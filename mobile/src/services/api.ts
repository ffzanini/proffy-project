import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.8.102:3333'
});

export default api;