"use client";

import React from "react";
import { usePostsApi } from "@/api/post/use-posts-api";

type PostType = {
  title: string;
  content: any;
  assets?: string;
};

export const useEditorController = () => {
  const [post, setPost] = React.useState<PostType>({ title: "", content: "" });
  const { onCreate } = usePostsApi();

  React.useEffect(() => {
    console.log(post.title, post.content);
  }, [post]);

  const changeTitle = (value: string) =>
    setPost((prevState) => {
      return {
        title: value,
        content: prevState.content,
      };
    });

  const changeContent = (value: string) =>
    setPost((prevState) => {
      return {
        title: prevState.title,
        content: value,
      };
    });

  const onSubmit = async () => {
    await onCreate(post)
      .then(() => window.alert("Post created"))
      .catch((error) => window.alert("Echec"));
  };

  return {
    post,
    changeContent,
    changeTitle,
    onSubmit,
  };
};
