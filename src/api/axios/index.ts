"use client";

import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:3333/api",
});

const token = localStorage.getItem("app-access-token") ?? "";
AxiosInstance.defaults.headers.common["Authorization"] =
  `Bearer ${JSON.parse(JSON.stringify(token))}`;

// export const callAction = (endPoint: string, method: axios.Method)

export default AxiosInstance;
