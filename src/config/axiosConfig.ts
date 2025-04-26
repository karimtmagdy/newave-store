// src/api/axiosConfig.ts
import axios from "axios";
const isDev = import.meta.env.DEV;
axios.defaults.baseURL = isDev
  ? import.meta.env.VITE_API_URL
  : import.meta.env.VITE_API_PROACTION;
// Create an Axios instance with default config
const api = axios.create({
  headers: { "Content-Type": "application/json" },
});

// Request interceptor: add auth token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // adjust retrieval logic as needed
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor: global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    // Optionally handle specific status codes, e.g.:
    // if (error.response?.status === 401) { /* logout/redirect */ }
    return Promise.reject(error);
  },
);

export default api;
