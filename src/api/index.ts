import axios from 'axios';

export const API_URI = import.meta.env.VITE_API_URI;

const API = axios.create({
  baseURL: `${API_URI}/api`,
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/';
      localStorage.removeItem('user-info');
    }

    return Promise.reject(error);
  },
);

export default API;
