"use client";

import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import { FormEventHandler, useState } from "react";

function LogInForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const auth = useAuth();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const url = `${window.location.origin}/api/auth/log-in`;
    const options = { method: "POST", body: JSON.stringify({ id, pw }) };
    const response = await fetch(url, options);
    const data = await response.json();

    if (data === "OK" && response.status === 200) {
      auth.setIsLoggedIn(true);
    } else {
      alert("로그인 실패~");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center flex-col gap-y-5 pt-32 w-1/2 mx-auto"
    >
      <h2 className="text-4xl font-bold pb-10">로그인</h2>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="w-9/12 h-16 rounded-xl text-black pl-4 text-lg"
        placeholder="아이디를 입력하세요"
      />
      <input
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        className="w-9/12 h-16 rounded-xl text-black pl-4 text-lg"
        placeholder="비밀번호를 입력하세요"
      />
      <button
        type="submit"
        className="w-9/12 h-16 bg-pink-700 rounded-xl hover:bg-pink-600 "
      >
        로그인하기
      </button>
    </form>
  );
}

export default LogInForm;
