/* eslint-disable no-unused-vars */
import { BASE_URL } from "../constants/constants";

import axios_ from "axios";
const axios = axios_.create({
  baseURL: BASE_URL,
  headers: {
    // You can add common headers here
    // For example, if you have an authentication token, you can set it in the headers.
    // 'Authorization': `Bearer ${yourAuthToken}
  },
});

// Request interceptor
axios.interceptors.request.use(
  (config) => {
    // You can perform actions before the request is sent
    // For example, you might want to add an authentication token to the headers.
    // config.headers.Authorization = `Bearer ${yourAuthToken}`;
    return config;
  },
  (error) => {
    // Handle errors here
    return Promise.reject(error);
  }
);

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    // Modify the response data if needed
    return response;
  },
  (error) => {
    // Handle errors here
    if (error.response) {
      // The request was made, and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(
        "Response error:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      // The request was made, but no response was received
      console.error("Request error:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axios;
