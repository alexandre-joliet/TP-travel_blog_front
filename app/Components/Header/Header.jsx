"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img
          className={styles.header__logo}
          src="/images/BeachLogo.png"
          alt="logo"
        ></img>
      </Link>

      <nav className={styles.header__nav}>
        <div className={styles.nav__menu}>
          <Link className={styles.nav__link} href="/">
            Accueil
          </Link>
          <Link className={styles.nav__link} href="/Categories">
            Catégories
          </Link>
          <Link className={styles.nav__link} href="/Articles">
            Articles
          </Link>
          {/* <Link href='/Admin/Create'>Création</Link>*/}
          {/*<Link href='/Admin/Users'>Gestion des utilisateurs</Link>*/}
          <Link className={styles.nav__link} href="/Favorites">
            Favoris
          </Link>
        </div>

        <div className={styles.nav__account}>
          <Link className={styles.nav__link} href="/Login">
            Connexion / Inscription
          </Link>
          <Link className={styles.nav__link} href="/About">
            À propos
          </Link>
          {/*<Link href='/Account'>Mon Compte</Link>*/}
        </div>
      </nav>
    </header>
  );
}
