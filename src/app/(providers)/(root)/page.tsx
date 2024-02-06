"use client";

import { useEffect, useState } from "react";

function HomePage() {
  const [posts, setPosts] = useState<
    { id: string; author: { name: string } }[]
  >([]);

  const url = `${window.location.origin}/api/til`;
  const options = { method: "GET" };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="bg-pink-700">
      <h2 className="text-3xl font-bold text-center pt-10 pb-20">TIL 모음집</h2>
      <ul className="flex flex-wrap gap-5 justify-center items-center">
        {posts.map((post) => (
          <li className="bg-neutral-900 w-1/6 p-7">
            <h6>{post.title}</h6>
            <p>{post.content}</p>
            <p>{post.author.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
