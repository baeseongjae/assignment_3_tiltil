import Link from "next/link";

function HeaderAuthButtons() {
  return (
    <div className="flex gap-x-4 items-center">
      <Link
        href="/sign-up"
        prefetch
        className="p-2 rounded-md hover:bg-pink-600"
      >
        회원가입하기
      </Link>
      <Link
        href="/log-in"
        className="p-2 rounded-md hover:text-pink-600  border hover:border-pink-600"
      >
        로그인하기
      </Link>
    </div>
  );
}

export default HeaderAuthButtons;
