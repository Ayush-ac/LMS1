import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://192.168.10.112:8080/api",
    withCredentials: true,
})


axiosInstance.interceptors.request.use(
    (config)=>{
        config.withCredentials = true;
        return config;
    },
    (error)=> Promise.reject(error)
);

axiosInstance.interceptors.request.use(
    (response) => response,
    (error) => {
        if (error.respone && error.respone.status === 401) {
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;