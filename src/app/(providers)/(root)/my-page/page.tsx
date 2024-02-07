"use client";

import React, { useState } from "react";

function MyPage() {
  const [nickname, setNickname] = useState("");
  // let nicknameDisplay;
  // let editButton = (
  //   <button className={styles.button} onClick={handleClickEdit}>
  //     {"✏️"}
  //   </button>
  // );

  // // 편집모드일때 text가 input태그로 바뀜.
  // if (isEditing || nickname === "") {
  //   nicknameDisplay = (
  //     <input
  //       className={styles.input}
  //       type="text"
  //       value={input}
  //       placeholder="닉네임을 입력하세요"
  //       onChange={handleChangeInput}
  //       required
  //     />
  //   );
  //   editButton = (
  //     <button className={styles.button} onClick={handleSubmitInput}>
  //       {"✔️"}
  //     </button>
  //   );
  // } else {
  //   nicknameDisplay = (
  //     <span className={styles.nicknameDisplay}>{nickname}</span>
  //   );
  // }

  return (
    <div>
      <section className="w-3/4 mx-auto p-8 text-center">
        <h2 className="py-10 text-4xl font-bold">프로필 1</h2>
        <div className="">
          <input
            type="text"
            className="mt-20 w-2/3 h-20 rounded-xl text-2xl pl-8 bg-neutral-900"
            placeholder="닉네임을 입력하세요"
            onChange={(e) => setNickname(e.target.value)}
            value={nickname}
          />
          {/* {nicknameDisplay}
          {editButton} */}
        </div>
      </section>
    </div>
  );
}

export default MyPage;
