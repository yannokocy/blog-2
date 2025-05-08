"use client";

import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:3333/api",
});

if (typeof window !== "undefined") {
  const token = localStorage.getItem("app-access-token") ?? "";
  AxiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
}

export default AxiosInstance;
