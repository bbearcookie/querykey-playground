import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

export const baseInstance = axios.create({ baseURL });
export const authInstance = axios.create({ baseURL });
export const formDataInstance = axios.create({ baseURL });

authInstance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${'사용자 권한을 표현하는 액세스 토큰을 담아요'}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

formDataInstance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${'사용자 권한을 표현하는 액세스 토큰을 담아요'}`;
    config.headers['Content-Type'] = 'multipart/form-data';

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
