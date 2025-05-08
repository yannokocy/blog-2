"use client";

import React from "react";
import { myPostCollection } from "@/api/post/actions";

export const usePostController = () => {
  const [posts, setPosts] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      const response = await myPostCollection();
      if (response.data.data) {
        setPosts(response.data.data);
      }
    })();
  }, []);

  return {
    posts,
  };
};
