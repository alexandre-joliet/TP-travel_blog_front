"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

const create = () => {
  return (
    <>
      <div className={styles.div}>
        <main className={styles.main}>
          <h1 className={styles.creation}>Création de l&apos;article</h1>
          <div className={styles.newarticle}>
            <form className={styles.utilisateur}>
              <div className={styles.all}>
                <img
                  className={styles.img}
                  src="../images/voyage.jpg"
                  alt="photo utilisateur"
                ></img>
              </div>

              <label for="Title">Titre de l&apos;article :</label>
              <div className={styles.all}>
                <input
                  type="text"
                  placeholder="  Entrer le titre"
                  className={styles.title}
                />

                <button>
                  <span class="material-symbols-outlined">done</span>
                </button>
              </div>

              <label for="pseudo">Pseudo :</label>
              <div className={styles.all}>
                <input
                  type="text"
                  placeholder="  Entrer le pseudo"
                  className={styles.pseudo}
                />
                <div className={styles.button2}>
                  <button>
                    <span class="material-symbols-outlined">done</span>
                  </button>
                </div>
              </div>
              <label for="category">Catégorie :</label>
              <div className={styles.all}>
                <input
                  type="text"
                  placeholder="  Enter la catégorie"
                  className={styles.categorie}
                />
                <div className={styles.button2}>
                  <button>
                    <span class="material-symbols-outlined">done</span>
                  </button>
                </div>
              </div>
              <label for="article">Rédiger l&apos;article :</label>
              <div className={styles.all}>
                <input
                  type="text"
                  placeholder="  Rédiger l'article"
                  className={styles.write}
                />
                <div className={styles.button2}>
                  <button>
                    <span class="material-symbols-outlined">done</span>
                  </button>
                </div>
              </div>

              <div className={styles.button2}></div>

              <div className={styles.submit}>
                <input type="submit" value="Publier" />
              </div>
              <div className={styles.submit}>
                <input type="submit" value="Ajouter au brouillon" />
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default create;
