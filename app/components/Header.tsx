import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className="w-screen ">
      <nav className="container flex items-center justify-between md:my-5 ">
        <figure className="object-contain ml-8 cursor-pointer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            width={100}
            height={100}
            alt="logo"
          />
        </figure>
        <ul className="hidden md:flex md:space-x-10">
          <li className={styles.header__link}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.header__link}>
            <Link href="/">TV Shows</Link>
          </li>
          <li className={styles.header__link}>
            <Link href="/">Movies</Link>
          </li>
          <li className={styles.header__link}>
            <Link href="/">New & Popular</Link>
          </li>
          <li className={styles.header__link}>
            <Link href="/">My List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
