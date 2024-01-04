/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./page.module.css";
import NavBurger from "../Nav_burger/NavBurger";
import NavFull from "../Nav_full/NavFull";

export default function Header() {
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
      <NavBurger></NavBurger>

      {/* FULL MENU */}
      {/* <NavFull></NavFull> */}

    </header>
  );
}
