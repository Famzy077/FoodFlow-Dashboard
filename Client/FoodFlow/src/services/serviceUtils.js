// "use client";
// require("dotenv").config();
import { apiClient2 } from "./AxiosApiClient";
import RefreshAccessToken from "./RefreshAccessToken";

// let token;

// if (typeof window !== "undefined") {
//   token = window.localStorage.getItem("auth_token");
//   //console.log("we are running on the client");
// } else {
//   //console.log("we are running on the server");
// }

const apiUrls = {
  inventoryUrl: "/products",
  procurementUrl: "/kitchen/procurement",
};

const proccessReq = async (targetUrl, method, body = null) => {
  let res;

  const handleRequest = {
    getRequest: async () => await apiClient2.get(targetUrl),
    postRequest: async () => await apiClient2.post(targetUrl, body),
    patchRequest: async () => await apiClient2.patch(targetUrl, body),
  };

  try {
    if (method === "GET") {
      res = await handleRequest.getRequest();
    } else if (method === "POST") {
      res = await handleRequest.postRequest();
    } else if (method === "PATCH") {
      res = await handleRequest.patchRequest();
    }
    //console.log(res.data)
    return res.data;
  } catch (error) {
    //console.log("Error:", error);

    const errorFormat = {
      data: error.response?.data,
      status: error.response?.status,
    };
    //console.log("E response", errorFormat);

    if (errorFormat.status === 401) {
      //console.log("Refresh Token Logic");
      await RefreshAccessToken();
    }

    throw error;
  }
};
const utils = {
  apiUrls,
  proccessReq,
};

export default utils;
