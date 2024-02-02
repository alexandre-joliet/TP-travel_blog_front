/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { destroyCookie } from "@/app/login/actions";
import { useRouter } from "next/router";

export default function NavFull(isConnected, isAdmin) {
  const isConnectedMenu = isConnected.isConnected.isConnected;
  const isAdminMenu = isConnected.isConnected.isAdmin;

  //TODO: URL à adapter
  const handleLogout = async () => {
    try {
      const response = await fetch("https://api-travel-blog.onrender.com/logout", { // ttps://api-travel-blog.onrender.com  http://localhost:3000
        method: "POST",
        credentials: "include",
      });

      const message = await response.json();
      console.log(message);

      destroyCookie('userToken');

      const router = useRouter();
      router.push('/')

      // window.location.reload();

    } catch (error) {
      console.error("Erreur lors de la déconnexion", error);
    }
  };

  return (
    <nav className={styles.header__nav}>
      <ul className={styles.nav__menu}>
        <li className={styles.nav__li}>
          <Link className={styles.nav__link} href="/">
            Accueil
          </Link>
        </li>
        <li className={styles.nav__li}>
          <Link className={styles.nav__link} href="/articles">
            Articles
          </Link>
        </li>
        <li className={styles.nav__li}>
          <Link className={styles.nav__link} href="/categories">
            Catégories
          </Link>
        </li>
        
        {/* <li className={styles.nav__li}>
            <Link className={styles.nav__link} href="/favorites">
              Favoris
            </Link>
          </li> */}

        {isAdminMenu && (
          <li className={styles.nav__li}>
            <Link className={styles.nav__link} href="/admin">
              Administration
            </Link>
          </li>
        )}
      </ul>

      <ul className={styles.nav__account}>
        <li className={styles.nav__li}>
          <Link className={styles.nav__link} href="/about">
            À propos
          </Link>
        </li>

        {!isConnectedMenu && (
          <li className={styles.nav__li}>
            <Link className={styles.nav__button_sign} href="/login">
              Connexion / Inscription
            </Link>
          </li>
        )}

        {isConnectedMenu && (
          <li className={styles.nav__li}>
            <button onClick={handleLogout} className={styles.nav__logout}>
              Déconnexion
            </button>
          </li>
        )}

        {/* <Link href='/account'>Mon Compte</Link> */}
      </ul>
    </nav>
  );
}
