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
    <>
      {/* BURGER */}
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
            <li className={styles.nav__li}>
              <Link className={styles.nav__link} href="/About">
                À propos
              </Link>
            </li>
          </ul>

          <ul className={styles.nav__account}>
            <li className={styles.nav__li}>
              <Link className={styles.nav__button_sign} href="/Login">
                Connexion / Inscription
              </Link>
            </li>

            {/* <Link href='/Account'>Mon Compte</Link> */}
          </ul>
        </div>
      </nav>
    </>
  );
}
