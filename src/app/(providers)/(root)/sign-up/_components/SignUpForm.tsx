"use client";

import { FormEventHandler, useState } from "react";

function SignUpForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <form className="flex items-center flex-col gap-y-5 pt-32 w-1/2 mx-auto">
      <h2 className="text-4xl font-bold pb-10">회원가입</h2>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="w-9/12 h-16 rounded-xl pl-4 text-lg text-black"
        placeholder="아이디를 입력하세요"
      />
      <input
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        className="w-9/12 h-16 rounded-xl pl-4 text-lg text-black"
        placeholder="비밀번호를 입력하세요"
      />
      <input
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        className="w-9/12 h-16 rounded-xl pl-4 text-lg text-black"
        placeholder="비밀번호를 다시 입력하세요"
      />
      <button
        type="submit"
        className="w-9/12 h-16 bg-pink-700 rounded-xl hover:bg-pink-600"
      >
        회원가입하기
      </button>
    </form>
  );
}

export default SignUpForm;
