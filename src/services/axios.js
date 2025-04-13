import axios from "axios";

// const BASE_URL = "https://nutro-backend.onrender.com" ;
const BASE_URL = "https://gpdn-global-palliative-doctors-network.onrender.com/api";

const Api = axios.create({
  baseURL: BASE_URL,
});

// Interceptor to handle response errors
Api.interceptors.response.use(
  (Response) => Response,
  (error) => {
    if (error.response) {
      console.log(error.response);
      return error;
    } else {
      console.log("axios error:", error);
    }
    return Promise.reject(error);
  }
);

// Interceptor to add Authorization header with token if available
Api.interceptors.request.use(
  (config) => {
    // Access localStorage only in the browser
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");

      // Add token to the request headers if available
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);


export default Api;
