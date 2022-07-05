import axios from 'axios';

export const api = axios.create({
  baseURL: `http://localhost:${process.env.VITE_BASE_URL_PORT}`,
});
