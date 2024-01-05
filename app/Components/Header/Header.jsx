/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./page.module.css";
import NavBurger from "../Nav_burger/NavBurger";
import NavFull from "../Nav_full/NavFull";
import { useEffect, useState } from "react";

export default function Header() {
  const smallScreen = () => {
    return window.innerWidth < 880;
  }
  
  const [isSmallScreen, setisSmallScreen] = useState(smallScreen());

  useEffect(() => {
    const handleWindowResize = () => {
      setisSmallScreen(smallScreen());
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

      {/* BURGER */}
      {isSmallScreen && <NavBurger></NavBurger>}

      {/* FULL MENU */}
      {!isSmallScreen && <NavFull></NavFull>}
    </header>
  );
}
