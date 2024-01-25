"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import { after } from "node:test";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <figure className="object-contain cursor-pointer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            width={100}
            height={100}
            alt="logo"
          />
        </figure>
        <ul className="hidden space-x-4 md:flex ">
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
      </div>
      <div className="flex items-center space-x-6 text-sm font-light">
        <SearchIcon className="hidden w-6 h-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="w-6 h-6 sm:inline" />
        <Link href="/account">
          <Image
            src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
            width={24}
            height={24}
            alt="icon"
            className="rounded cursor-pointer "
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
