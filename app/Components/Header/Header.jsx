/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./page.module.css";
import NavBurger from "../Nav_burger/NavBurger";
import NavFull from "../Nav_full/NavFull";
import { useEffect, useState } from "react";

export default function Header(isConnected, isAdmin) {
  
  const smallScreen = "(max-width: 880px)";

  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia(smallScreen).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(smallScreen);

    // MediaQueryList est un objet qui stocke les informations des media queries
    // 'matches' est un boolean qui retourne 'true' si le document correspond à la media query
    function handleScreenChange(MediaQueryList) {
      setIsSmallScreen(MediaQueryList.matches);
    }

    // Ajoute un écouteur d'événements pour détecter les changements d'écran
    mediaQuery.addEventListener("change", handleScreenChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Link href="/">
        <img
          className={styles.header__logo}
          src="/images/airplane.png"
          alt="Logo représentant un avion blanc faisant le tour de la Terre"
        ></img>
      </Link>
      {isSmallScreen ? (
        <NavBurger isConnected={isConnected} isAdmin={isAdmin} />
      ) : (
        <NavFull isConnected={isConnected} isAdmin={isAdmin} />
      )}
    </header>
  );
}
