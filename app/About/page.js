"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

const about = () => {
  return (
    <>
  
      <div className={styles.div}>
        <main>
          <div>
            <h1 className={styles.title}>Qui suis-je ?</h1>
          </div>
          <div className={styles.card}>
            <img className={styles.img} src="./images/john.jpg" alt="photo de john"></img>
            <div className={styles.contenent}>
              <p className={styles.p}>
                Bienvenue sur O&apos;Voyages, le blog de voyage personnel
                d&apos;un explorateur passionné. Je m&apos;appelle John et je suis
                ravi de vous accueillir dans mon univers de découvertes et
                d&apos;aventures.</p>
                <p className={styles.p}>
                Ici, vous trouverez des récits authentiques et
                des inspirations pour vous guider vers des destinations
                extraordinaires.</p>
                <p className={styles.p}>
                 Que vous soyez en quête de plages
                paradisiaques, de sites historiques fascinants ou de rencontres
                culturelles enrichissantes, O&apos;Voyages est là pour vous
                accompagner. </p>
                <p className={styles.p}>
                En partageant mes expériences personnelles, je
                souhaite vous aider à choisir la destination pour vos propres
                voyages.</p>
                <p className={styles.p}>
                 Rejoignez-moi dans cette aventure passionnante à
                travers le monde, où chaque article est une invitation à
                explorer, à s&apos;émerveiller et à créer des souvenirs
                inoubliables. Préparez-vous à embarquer pour des expériences
                uniques et à embrasser la magie du voyage.</p>
                <p className={styles.p}>
                 Bienvenue sur O&apos;Voyages, je serais votre compagnon pour des aventures
                inoubliables.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default about;
