/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Header from "../Header/Header";

export default function NavFull() {

  // console.log(isConnected);
  // const isConnectedShrinked = isUserConnected.isUserConnected;
  // console.log(isConnectedShrinked);

  const router = useRouter();
    

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3000/logout',  {
        method: "POST",
        credentials: "include",
      })

      const message = await response.json();
      console.log(message);

      forceUpdate(<Header />);
      router.push('/');

    } catch (error) {
      console.error("Erreur lors de la déconnexion", error);
    }
  }
  
  return (
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
          
          {/* TODO: A cacher selon la connexion */}
          <li className={styles.nav__li}>
            <button onClick={handleLogout} className={styles.nav__logout}>
              Déconnexion
            </button>
          </li>

          {/* <Link href='/Account'>Mon Compte</Link> */}
        </ul>
      </nav>
  );
}