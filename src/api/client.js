import axios from 'axios';

const raw = import.meta.env.VITE_API_BASE_URL || 'https://server-seven-gamma-70.vercel.app';
const baseURL = String(raw).replace(/\/$/, '');

export const api = axios.create({
  baseURL,
  withCredentials: true,
});
