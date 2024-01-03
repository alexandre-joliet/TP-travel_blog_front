"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import style from "../../page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.terms}>
        <Link className={styles.link} href="/Terms">
          Mentions légales
        </Link>
      </div>
      <div className={styles.social_networks}>
        <Link className={styles.link} href="">
          <img
            className={styles.img_footer}
            src="/images/facebook.png"
            alt="Lien vers la page Facebook"
          ></img>
        </Link>
        <Link className={styles.link} href="">
          <img
            className={styles.img_footer}
            src="/images/instagram.png"
            alt="Lien vers la page Instagram"
          ></img>
        </Link>
      </div>
    </footer>
  );
}
