"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

const admin = () => {
  return (
    <>
      <div className={styles.div}>
        <main className={styles.main}>
          <h1 className={styles.mon_compte}>Mon Compte</h1>
          <div className={styles.compte}>
            <form className={styles.utilisateur}>
              <div className={styles.all}>
                <img
                  className={styles.img}
                  src="../images/voyage.jpg"
                  alt="photo utilisateur"
                ></img>
                <div className={styles.button}>
                  <button>
                    <span class="material-symbols-outlined">edit</span>
                  </button>
                </div>
              </div>

              <label for="firstname">Nom :</label>
              <div className={styles.all}>
                <input
                  type="text"
                  placeholder="  Entrer le nom"
                  className={styles.firstname}
                />
                <div className={styles.button2}>
                  <button>
                    <span class="material-symbols-outlined">edit</span>
                  </button>
                  <button>
                    <span class="material-symbols-outlined">done</span>
                  </button>
                </div>
              </div>

              <label for="lastname">Prénom :</label>
              <div className={styles.all}>
                <input
                  type="text"
                  placeholder="  Entrer le prénom"
                  className={styles.lastname}
                />
                <div className={styles.button2}>
                  <button>
                    <span class="material-symbols-outlined">edit</span>
                  </button>
                  <button>
                    <span class="material-symbols-outlined">done</span>
                  </button>
                </div>
              </div>
              <label for="pseudo">Pseudo :</label>
              <div className={styles.all}>
                <input
                  type="text"
                  placeholder="  Enter le pseudo"
                  className={styles.pseudo}
                />
                <div className={styles.button2}>
                  <button>
                    <span class="material-symbols-outlined">edit</span>
                  </button>
                  <button>
                    <span class="material-symbols-outlined">done</span>
                  </button>
                </div>
              </div>
              <label for="email">Email :</label>
              <div className={styles.all}>
                <input
                  type="text"
                  placeholder="  Entrer l'email"
                  className={styles.email}
                />
                <div className={styles.button2}>
                  <button>
                    <span class="material-symbols-outlined">edit</span>
                  </button>
                  <button>
                    <span class="material-symbols-outlined">done</span>
                  </button>
                </div>
              </div>
              <label for="password">Mot de passe :</label>
              <div className={styles.all}>
                <input
                  type="password"
                  placeholder="  Entrer le mot de passe"
                  className={styles.pass}
                />
                <div className={styles.button2}>
                  <button>
                    <span class="material-symbols-outlined">edit</span>
                  </button>
                  <button>
                    <span class="material-symbols-outlined">done</span>
                  </button>
                </div>
              </div>
              <div className={styles.submit}>
                <input type="submit" value="Enregistrer" />
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default admin;
