// import { API_REFRESH } from "@/services/api/api-url";
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import axiosRetry from "axios-retry";
const isDev = import.meta.env.DEV;
axios.defaults.baseURL = isDev
  ? import.meta.env.VITE_API_URL
  : import.meta.env.VITE_API_PROACTION;
const DEFAULT_TIMEOUT = 30000;
// Create an Axios instance with default config
const api = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  },
  // Include cookies in cross-origin requests if needed
  withCredentials: true,
  timeout: DEFAULT_TIMEOUT,
});
axiosRetry(api, {
  retries: 3,
  retryDelay: (retryCount) => retryCount * 1000,
});
// Request interceptor: add auth token if available
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token"); // adjust retrieval logic as needed
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  },
);

// Response interceptor: global error handling
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig;
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest.headers?.["X-Retry"]
    ) {
      // Set a flag to prevent infinite retry loops
      if (originalRequest.headers) {
        originalRequest.headers["X-Retry"] = "true";
      }
      try {
        // Attempt to refresh the token
        const refreshToken = localStorage.getItem("refresh_token");

        if (refreshToken) {
          // Call your refresh token endpoint
          // const refreshResponse = await api.post(API_REFRESH, {
          //   refresh_token: refreshToken,
          // });

          // Store the new tokens
          // const { token, refresh_token } = refreshResponse.data;
          // localStorage.setItem("token", token);
          // localStorage.setItem("refreshToken", refresh_token);

          // Update the failed request's Authorization header and retry
          if (originalRequest.headers) {
            // originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
          }
        }
      } catch (refreshError) {
        // If refresh fails, log out the user
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");

        // Redirect to login page
        window.location.href = "/login";
        // nav('/auth/sign-in')
        return Promise.reject(refreshError);
      }
    }
    switch (error.response?.status) {
      case 400:
        console.error("Bad request:", error.response?.data);
        break;
      case 403:
        console.error("Forbidden:", error.response?.data);
        break;
      case 404:
        console.error("Resource not found:", error.response?.data);
        break;
      case 500:
        console.error("Server error:", error.response?.data);
        break;
      default:
        console.error("API error:", error);
        break;
    }
    return Promise.reject(error);
  },
);
const createCancelToken = (): CancelToken => {
  const controller = new AbortController();
  return {
    signal: controller.signal,
    cancel: () => controller.abort("Request cancelled by user"),
  };
};
type CancelToken = {
  signal: AbortSignal;
  cancel: () => void;
};
const cache = new Map<string, { data: any; timestamp: number }>();

const cachedGet = async <T = any>(
  url: string,
  config: AxiosRequestConfig = {},
  ttl = 60000,
): Promise<T> => {
  const cacheKey = `${url}-${JSON.stringify(config)}`;

  // Check if we have a cached response and it's still valid
  const cachedResponse = cache.get(cacheKey);
  if (cachedResponse && Date.now() - cachedResponse.timestamp < ttl) {
    return cachedResponse.data;
  }

  // If no cache or expired, make the request
  const response = await api.get(url, config);

  // Cache the new response
  cache.set(cacheKey, {
    data: response.data,
    timestamp: Date.now(),
  });

  return response.data;
};
const uploadFile = async (
  url: string,
  file: File,
  onProgress?: (percentage: number) => void,
): Promise<any> => {
  const formData = new FormData();
  formData.append("file", file);

  return api.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (progressEvent) => {
      if (onProgress && progressEvent.total) {
        const percentage = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total,
        );
        onProgress(percentage);
      }
    },
  });
};

export { api as default, createCancelToken, cachedGet, uploadFile };
