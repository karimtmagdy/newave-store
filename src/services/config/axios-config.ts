import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
  isAxiosError,
} from "axios";
import axiosRetry from "axios-retry";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL_LOCAL || import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
  cancelToken: axios.CancelToken.source().token,
});
axiosRetry(api, {
  retries: 3,
  retryDelay: (retryCount) => retryCount * 1000,
});
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token") || Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    if (isAxiosError(error.response) || error.request) {
      console.error("Response error:", error.response.data);
      if (error.response) {
        try {
          return axios(error.config);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
        // console.warn("It looks like your session has expired, please log in again.");
      } else if (error.request) {
        console.error("Request error:", error.request);
      }
    } else {
      console.error("Server connection error:", error.message);
    }
    return Promise.reject(error); // error status is not 401
  },
);

export default api;
