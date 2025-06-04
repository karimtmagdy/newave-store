import type { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export const SetupInterceptor = (api: AxiosInstance) => {
  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      console.log(error);
      if (error.response?.status === 403) console.log("first");
      switch (error.response?.status) {
        case 400:
          //   console.log(error.response.data.error.errors);
          break;
        case 401:
          // console.log(error.response.data.error.errors);
          break;
        case 403:
          //   console.log(error.response.data.error.errors);
          break;
        case 404:
          //   console.log(error.response.data.error.errors);
          break;
        case 500:
          //   console.log(error.response.data.error.errors);
          break;
        default:
          //   console.log(error.response.data.error.errors);
          break;
      }
      return Promise.reject(error);
    },
  );
};

// console.error("Bad request:", error.response?.data);
// console.error("Unauthorized:", error.response?.data);
// console.error("Forbidden:", error.response?.data);
// console.error("Resource not found:", error.response?.data);
// console.error("Server error:", error.response?.data);
// console.error("API error:", error);
