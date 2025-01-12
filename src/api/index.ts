import axios from 'axios';

export const API_URI = import.meta.env.VITE_API_URI;

const API = axios.create({
  baseURL: `${API_URI}/api`,
});

export default API;
