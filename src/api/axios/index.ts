"use client";

import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:3333/api",
});

AxiosInstance.defaults.headers.common["Authorization"] =
  `Bearer ${JSON.parse(localStorage.getItem("app-access-token") ?? "")}`;

// export const callAction = (endPoint: string, method: axios.Method)

export default AxiosInstance;
