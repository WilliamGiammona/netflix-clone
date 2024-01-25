import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="w-screen ">
      <nav className="container flex justify-between m-5 ">
        <figure className="object-contain cursor-pointer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            width={100}
            height={100}
            alt="logo"
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
          <li>
            <Link href="/">Contact</Link>
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
