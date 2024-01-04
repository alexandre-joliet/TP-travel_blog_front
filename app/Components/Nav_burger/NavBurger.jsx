/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./page.module.css";

export default function NavBurger() {
  return (
    <>
      {/* BURGER */}
      <nav className={styles.header__nav}>
        <ul className={styles.nav__menu}>
          <li className={styles.nav__li}>
            <Link className={styles.nav__link} href="/">
              Accueil
            </Link>
          </li>
          <li className={styles.nav__li}>
            <Link className={styles.nav__link} href="/Categories">
              Catégories
            </Link>
          </li>

          <li className={styles.nav__li}>
            <Link className={styles.nav__link} href="/Articles">
              Articles
            </Link>
          </li>

          {/* <Link href='/Admin/Create'>Création</Link>*/}
          {/*<Link href='/Admin/Users'>Gestion des utilisateurs</Link>*/}
          <li className={styles.nav__li}>
            <Link className={styles.nav__link} href="/Favorites">
              Favoris
            </Link>
          </li>
        </ul>

        <ul className={styles.nav__account}>
          <li className={styles.nav__li}>
            <Link className={styles.nav__link} href="/About">
              À propos
            </Link>
          </li>
          <li className={styles.nav__li}>
            <Link className={styles.nav__button_sign} href="/Login">
              Connexion / Inscription
            </Link>
          </li>

          {/* <Link href='/Account'>Mon Compte</Link> */}
        </ul>
      </nav>
    </>
  );
}