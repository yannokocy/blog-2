import axios from "@/api/axios";

export const createPost = async (payload: any) =>
  axios.post("/posts/create", payload);

export const updatePost = async (id: string, payload: any) =>
  await axios.patch(`/posts/my-post/${id}/update`, payload);

export const getUserPost = async (id: string) =>
  await axios.get(`/posts/my-post/${id}`);

export const getPost = async (id: string) =>
  await axios.get(`/posts/${id}/get`);

export const publishPost = async (id: string) =>
  await axios.patch(`/posts/my-post/${id}/publish`);

export const myPostCollection = async () => await axios.get("/posts/my-posts");
