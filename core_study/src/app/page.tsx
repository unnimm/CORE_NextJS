"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<object[]>([]);

  const getPost = async () => {
    const res = await axios.get("/api/post");
    setPosts(res.data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <div>
        {posts.map((post: any) => {
          return (
            <div className="border border-rose-500 transition hover:bg-rose-500 ">
              <div key={post._id}>
                <div>{post.name}</div>
                <div>{post.department}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
