"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

const gestion = () => {
  return (
    <>
      <div className={styles.div}>
        <main>
          <h1 className={styles.title}>Liste des utilisateurs</h1>
          <div className={styles.users}>
            <Link className={styles.user} href="/">
              Pseudo / Email{" "}
              <button className={styles.button}>
                <span class="material-symbols-outlined">delete</span>
              </button>
            </Link>

            <Link className={styles.user} href="/">
              Pseudo / Email{" "}
              <button className={styles.button}>
                <span class="material-symbols-outlined">delete</span>
              </button>
            </Link>

            <Link className={styles.user} href="/">
              Pseudo / Email{" "}
              <button className={styles.button}>
                <span class="material-symbols-outlined">delete</span>
              </button>
            </Link>

            <Link className={styles.user} href="/">
              Pseudo / Email{" "}
              <button className={styles.button}>
                <span class="material-symbols-outlined">delete</span>
              </button>
            </Link>

            <Link className={styles.user} href="/">
              Pseudo / Email{" "}
              <button className={styles.button}>
                <span class="material-symbols-outlined">delete</span>
              </button>
            </Link>

            <Link className={styles.user} href="/">
              Pseudo / Email{" "}
              <button className={styles.button}>
                <span class="material-symbols-outlined">delete</span>
              </button>
            </Link>

            <Link className={styles.user} href="/">
              Pseudo / Email{" "}
              <button className={styles.button}>
                <span class="material-symbols-outlined">delete</span>
              </button>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default gestion;
