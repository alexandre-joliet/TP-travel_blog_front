"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Search() {
  return (
    <>
      <label for="site-search"></label>
      <div className={styles.search}>
        <button className={styles.button}>
          <span class="material-symbols-outlined">search</span>
        </button>

        <input
          className={styles.input}
          type="search"
          placeholder="  Recherche ... "
          id="site-search"
          name="q"
        />
      </div>
    </>
  );
}
