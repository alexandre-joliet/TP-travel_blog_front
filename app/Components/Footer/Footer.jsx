/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import style from "../../page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__terms}>
        <Link className={styles.footer__link} href="/Terms">
          Mentions légales
        </Link>
      </div>
      <div className={styles.footer__socialnetworks}>
        <Link className={styles.footer__link} href="">
          <img
            className={styles.footer__img}
            src="/images/facebook.png"
            alt="Lien vers la page Facebook"
            title="A venir prochainement !"
          ></img>
        </Link>
        <Link className={styles.footer__link} href="">
          <img
            className={styles.footer__img}
            src="/images/instagram.png"
            alt="Lien vers la page Instagram"
            title="A venir prochainement !"
          ></img>
        </Link>
      </div>
    </footer>
  );
}
