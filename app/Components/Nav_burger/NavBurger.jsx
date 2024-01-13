/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState, useEffect, useRef } from "react";

export default function NavBurger() {
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

  const handleCLickOutside = (event) => {
    // Checking if the click is outside the menu element
    if (elementRef.current && !elementRef.current.contains(event.target)) {
      setMenuIsOpen(false);
    }
  };

  // Setting up an effect to listen for click events on the document
  useEffect(() => {
    document.addEventListener("click", handleCLickOutside);
    // Cleaning up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleCLickOutside);
    };
  }, []);

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
            <Link className={styles.nav__link} href="/categories">
              Catégories
            </Link>
          </li>

          <li className={styles.nav__li}>
            <Link className={styles.nav__link} href="/articles">
              Articles
            </Link>
          </li>

          {/* <Link href='/admin/article-management'>Articles</Link>*/}
          {/*<Link href='/admin/user-management'>Utilisateurs</Link>*/}
          <li className={styles.nav__li}>
            <Link className={styles.nav__link} href="/favorites">
              Favoris
            </Link>
          </li>
          <li className={styles.nav__li}>
            <Link className={styles.nav__link} href="/about">
              À propos
            </Link>
          </li>
        </ul>

        <ul className={styles.nav__account}>
          <li className={styles.nav__li}>
            <Link className={styles.nav__button_sign} href="/login">
              Connexion / Inscription
            </Link>
          </li>

          {/* <Link href='/account'>Mon Compte</Link> */}
        </ul>
      </div>
    </nav>
  );
}
