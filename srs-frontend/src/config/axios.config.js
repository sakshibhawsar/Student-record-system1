import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/App',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Allow-Control-Allow-Origin": "*",
    }
});
export default axiosInstance;