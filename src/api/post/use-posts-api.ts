import { createPost } from "@/api/post/actions";

export const usePostsApi = () => {
  const onCreate = async (data: any) => {
    let result = await createPost(data);
  };

  return {
    onCreate,
  };
};
