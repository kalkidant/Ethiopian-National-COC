// api.ts
import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  headers: {
    'Authorization-Key': 'a593e16f43bc2fa6132af7d823113f729ba32d8416120808a967',
  },
});

export default axiosInstance;