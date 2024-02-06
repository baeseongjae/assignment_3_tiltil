"use client";

import { FormEventHandler, useState } from "react";

function TILForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const url = `${window.location.origin}/api/til`;
    const options = {
      method: "POST",
      body: JSON.stringify({ title, content }),
    };
    const response = await fetch(url, options);
    const data = await response.json();

    console.log("Data", data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center flex-col gap-y-5 w-3/4 pt-4 mx-auto"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-black w-full h-32 pl-4 text-4xl bg-neutral-900"
        placeholder="제목을 입력하세요"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border border-black w-full h-96 p-4 text-lg bg-neutral-900"
        placeholder="당신의 이야기를 입력해보세요...."
      />

      <button
        type="submit"
        className="w-1/2 bg-pink-800 hover:bg-pink-700 h-16 rounded-lg text-lg"
      >
        작성하기
      </button>
    </form>
  );
}

export default TILForm;
