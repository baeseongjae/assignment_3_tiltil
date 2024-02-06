import Link from "next/link";
import HeaderAuthButtons from "./_components/HeaderAuthButtons";

function Header() {
  return (
    <header className="h-20 border-b text-white bg-black flex items-center justify-between mx-auto">
      <Link href="/" className="font-bold text-2xl mx-10">
        TIL::TIL
      </Link>

      <nav>
        <ul className="flex">
          <li>
            <Link href="/til/trending">트렌딩</Link>
          </li>
          <li>
            <Link href="/til/latest">최신</Link>
          </li>
          <li>
            <Link href="/til/write">TIL 쓰러가기</Link>
          </li>
        </ul>
      </nav>

      <HeaderAuthButtons />
    </header>
  );
}

export default Header;
