import Link from "next/link";
import HeaderAuthButtons from "./_components/HeaderAuthButtons";

function Header() {
  return (
    <header className="h-20 border-b text-white bg-black flex items-center justify-between mx-auto">
      <Link href="/" className="font-bold text-2xl mx-10">
        TIL::TIL
      </Link>

      <nav className="w-1/3">
        <ul className="flex items-center justify-around gap-x-5 w-full p-2">
          <li>
            <Link
              href="/til/trending"
              className="rounded-md hover:bg-pink-700 block py-2 px-4"
            >
              트렌딩
            </Link>
          </li>
          <li>
            <Link
              href="/til/latest"
              className="rounded-md hover:bg-pink-700 block py-2 px-4"
            >
              최신
            </Link>
          </li>
          <li>
            <Link
              href="/til/write"
              className="rounded-md hover:bg-pink-700 block p-2"
            >
              TIL 쓰러가기
            </Link>
          </li>
        </ul>
      </nav>

      <HeaderAuthButtons />
    </header>
  );
}

export default Header;
