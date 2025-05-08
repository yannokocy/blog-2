"use client";

import Post from "@/component/Post";
import React from "react";
import { usePostController } from "@/app/(blog)/my-posts/use-post-controller";

export default function MyPostsPage() {
  const { posts } = usePostController();

  return (
    <main className="grid grid-cols-3 gap-3">
      {(posts ?? []).map((item: any, index: number) => (
        <div className="col-span-1" key={index}>
          <Post {...item} />
        </div>
      ))}
    </main>
  );
}
