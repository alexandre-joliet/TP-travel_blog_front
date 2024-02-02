/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState, useEffect, useRef } from "react";
import { destroyCookie } from "@/app/login/actions";
import { useRouter } from "next/router";

export default function NavBurger(isConnected, isAdmin) {
  const isConnectedMenu = isConnected.isConnected.isConnected;
  const isAdminMenu = isConnected.isConnected.isAdmin;

  // DROPDOWN MENU
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  // Creating a reference to a DOM element
  const elementRef = useRef(null);

  const handleMenuClick = () => {
    if (menuIsOpen === false) {
      setMenuIsOpen(true);
    } else {
      setMenuIsOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    // Checking if the click is outside the menu element
    if (elementRef.current && !elementRef.current.contains(event.target)) {
      setMenuIsOpen(false);
    }
  };

  // Setting up an effect to listen for click events on the document
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    // Cleaning up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //TODO: URL à adapter
  const handleLogout = async () => {
    try {
      const response = await fetch("https://api-travel-blog.onrender.com/logout", { // https://api-travel-blog.onrender.com  http://localhost:3000
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

  const hiddenClass = menuIsOpen ? "" : `${styles.hidden}`;

  return (
    <nav
      className={styles.header__nav}
      onClick={handleMenuClick}
      ref={elementRef}
    >
      Menu
      <div className={`${styles.nav__menuContainer} ${hiddenClass}`}>
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

          {isAdminMenu && (
            <li className={styles.nav__li}>
              <Link className={styles.nav__link} href="/admin">
                Administration
              </Link>
            </li>
          )}

          {/* <li className={styles.nav__li}>
            <Link className={styles.nav__link} href="/favorites">
              Favoris
            </Link>
          </li> */}

          <li className={styles.nav__li}>
            <Link className={styles.nav__link} href="/about">
              À propos
            </Link>
          </li>
        </ul>

        <ul className={styles.nav__account}>
          
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
      </div>
    </nav>
  );
}
