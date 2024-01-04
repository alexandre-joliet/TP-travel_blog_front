/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

const about = () => {
  return (
    <>
      <main className={styles.main}>
          <img
            className={styles.article__image}
            src="/images/john.jpg"
            alt="Photo de John de dos devant un paysage de montagne"
          ></img>
        <h1 className={styles.title}>Qui suis-je ?</h1>
        <article className={styles.article}>
            <p className={styles.article__text}>
              Bienvenue sur O&apos;Voyages, le blog de voyage personnel
              d&apos;un explorateur passionné. Je m&apos;appelle John et je suis
              ravi de vous accueillir dans mon univers de découvertes et
              d&apos;aventures.
            </p>
            <p className={styles.article__text}>
              Ici, vous trouverez des récits authentiques et des inspirations
              pour vous guider vers des destinations extraordinaires.
            </p>
            <p className={styles.article__text}>
              Que vous soyez en quête de plages paradisiaques, de sites
              historiques fascinants ou de rencontres culturelles
              enrichissantes, O&apos;Voyages est là pour vous accompagner.
            </p>
            <p className={styles.article__text}>
              En partageant mes expériences personnelles, je souhaite vous aider
              à choisir la destination pour vos propres voyages.
            </p>
            <p className={styles.article__text}>
              Rejoignez-moi dans cette aventure passionnante à travers le monde,
              où chaque article est une invitation à explorer, à
              s&apos;émerveiller et à créer des souvenirs inoubliables.
              Préparez-vous à embarquer pour des expériences uniques et à
              embrasser la magie du voyage !
            </p>
        </article>
      </main>
    </>
  );
};

export default about;
