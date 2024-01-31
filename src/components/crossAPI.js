import axios from 'axios'


const api = axios.create({
    baseURL: 'https://shiwans-portfolio.onrender.com',
})

export default api;