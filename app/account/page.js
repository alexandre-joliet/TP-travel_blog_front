"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { useRouter } from "next/navigation";

const Account = () => {
  const { isConnected, userData } = useCheckAuth();

  console.log(userData);

  if (isConnected === false || userData.label !== "Admin") {
    return (
      <>
        <h1>Vous n&apos;avez pas accès à cette page, merci de vous créer un compte et de vous connecter.</h1>
      </>
    )
  }


  // const router = useRouter();
  
  // useEffect(() => {
  //   if (isConnected === false) {
  //     router.push('/Login');
  //   }
  // })

  
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
                    <span className="material-symbols-outlined">edit</span>
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
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button>
                    <span className="material-symbols-outlined">done</span>
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
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button>
                    <span className="material-symbols-outlined">done</span>
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
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button>
                    <span className="material-symbols-outlined">done</span>
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
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button>
                    <span className="material-symbols-outlined">done</span>
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
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button>
                    <span className="material-symbols-outlined">done</span>
                  </button>
                </div>
              </div>
              <div className={styles.submit}>
                <input type="submit" value="Enregistrer" />
              </div>
              <div className={styles.submit}>
                <input type="submit" value="Supprimer mon compte" />
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Account;
