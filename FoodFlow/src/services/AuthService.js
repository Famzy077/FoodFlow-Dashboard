// import { delay } from "@/lib/Delay";
// import apiClient from "./AxiosApiClient";

// const login = "/auth/login";
// const register = "/auth/sign-up";
// const AuthService = {};

// AuthService.login = async (loginData) => {
//   const headers = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   try {
//     const res = await apiClient.post(login, loginData, headers);
//     return res.data;
//   } catch (error) {
//     throw error;
//   }
// };

// AuthService.register = async (sellerData) => {
//   const headers = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   try {
//     const res = await apiClient.post(register, sellerData, headers);
//     return res.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export default AuthService;

import apiClient from "./AxiosApiClient";

const loginEndpoint = "/auth/login";
const registerEndpoint = "/auth/sign-up";

const AuthService = {};

// Handle register
AuthService.register = async (sellerData) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await apiClient.post(registerEndpoint, sellerData, headers);
    return res.data;
  } catch (error) {
    // Enhanced error handling
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Error Response:", error.response.data);
      throw new Error(
        error.response.data.message || "Registration failed. Please try again."
      );
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error Request:", error.request);
      throw new Error(
        "No response received from the server. Please check your connection."
      );
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error Message:", error.message);
      throw new Error(
        error.message || "An unknown error occurred. Please try again."
      );
    }
  }
};

// Handle login
AuthService.login = async (loginData) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await apiClient.post(loginEndpoint, loginData, headers);
    return res.data;
  } catch (error) {
    // Enhanced error handling
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Error Response:", error.response.data);
      throw new Error(
        error.response.data.message || "Login failed. Please try again."
      );
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error Request:", error.request);
      throw new Error(
        "No response received from the server. Please check your connection."
      );
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error Message:", error.message);
      throw new Error(
        error.message || "An unknown error occurred. Please try again."
      );
    }
  }
};

export default AuthService;
