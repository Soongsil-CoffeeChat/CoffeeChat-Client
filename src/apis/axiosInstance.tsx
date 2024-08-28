import axios from "axios";

const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token");
};

const axiosInstance = axios.create({
  baseURL: 'https://cogo.life/api/v2',
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = getTokenFromLocalStorage();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;