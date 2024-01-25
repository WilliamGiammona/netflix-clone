import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="w-screen ">
      <nav className="container flex justify-between m-5 ">
        <figure>
          <Image
            src="https://rb.gy/ulxxee"
            width={100}
            height={100}
            alt="logo"
            className="object-contain cursor-pointer"
          />
        </figure>
        <ul className="flex space-x-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
