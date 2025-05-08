import axios from "../axios";

export const register = async (payload: any) =>
  await axios.post("/auth/register", { ...payload });

export const login = async (payload: any) =>
  await axios.post("/auth/login", payload);

console.log(axios.defaults.headers);
export const me = async () => await axios.get("/auth/me");
