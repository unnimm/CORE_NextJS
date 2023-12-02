"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [posts, setPosts] = useState<object[]>([]);
  const router = useRouter();

  const getPost = async () => {
    const res = await axios.get("/api/post");
    setPosts(res.data);
    // console.log(posts)
  };

  const deletePost = async (id: String) => {
    const res = await axios.delete(`/api/post?id=${id}`).then((res) => {
      console.log("삭제 성공");
      axios.get("/api/post").then((response) => {
        setPosts(response.data);
        
      });
    });
  };

  useEffect(() => {
    getPost();
  }, []);

  useEffect(() => {
    console.log(posts)
  }, [posts])

  return (
    <>
      <div className="grid grid-cols-3">
        {posts.map((post: any) => {
          return (
            <div className="border border-rose-500 transition hover:bg-rose-500 ">
              <div key={post.id}>
                <div>{post.id}</div>
                <div>{post.name}</div>
                <div>{post.department}</div>
                <button
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  ❌
                </button>
                <button
                  onClick={() => {
                    router.push(`/edit/`+post.id)
                  }}
                >
                  ✏️
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          return router.push("/write");
        }}
        className="w-[50px] h-[20px] bg-blue-200 text-xs rounded-md  hover:bg-blue-400 hover:scale-110 duration-150"
      >
        글쓰기
      </button>
    </>
  );
}
