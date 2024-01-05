/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./page.module.css";
import NavBurger from "../Nav_burger/NavBurger";
import NavFull from "../Nav_full/NavFull";
import { useEffect, useState } from "react";

export default function Header() {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    setScreenSize(window.innerWidth);

    const handleWindowResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Link href="/">
        <img
          className={styles.header__logo}
          src="/images/airplane.png"
          alt="logo"
        ></img>
      </Link>
      {screenSize < 880 ? <NavBurger></NavBurger> : <NavFull></NavFull>}
    </header>
  );
}
