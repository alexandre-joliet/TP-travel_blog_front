"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const Login = () => {
  const [myData, setMyData] = useState([]);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [role_id, setRole_id] = useState("2");
  const [pseudo, setPseudo] = useState("");

/*   const click_Login = (e) => {
    e.preventDefault();
   
      .then((response) => response.json())
      .then((data) => {
        if (resourceLimits.message === "SUCCESS") {
          alert("Vous êtes connecté.");
          this.goToMain();
        } else {
          alert("Vérifiez vos informations, s'il-vous-plait.");
        }
      });
  }; */
  const [responseTest, setResponseTest] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    await fetch("https://api-oblog2.onrender.com/signup", {
      method: "POST",
      host: "api-oblog2.onrender.com",
      headers: {
        "Content-Type":"application/x-www-form-urlencoded"
      },
      body: `last_name=${lastName}&first_name=${firstName}&avatar=&mail=${mail}&pseudo=${pseudo}N&password=${password}&role_id=${role_id}`
        

      // body: JSON.stringify({
      //   last_name: lastName,
      //   first_name: firstName,
      //   avatar: "",
      //   mail: mail,
      //   pseudo: pseudo,
      //   password: password,
      //   role_id: role_id,
    })
    .then(response => {
      console.log(response)
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
     
      
      setResponseTest("OK");
      return {responseOk};

      
      
      // Utilisez text() au lieu de json() pour gérer les réponses vides
    })
    // .then(text => {
    //   const data = text ? JSON.parse(text) : {};  // Convertissez en JSON seulement si le texte n'est pas vide
    //   if (data === true) {
    //     window.location.href = "/"; // Remplacez par l'URL de votre choix
    //   } else {
    //     window.location.href = "page_erreur.html";
    //   }
    // })
    .catch(error => {
      console.log(error)
      console.error('Il y a eu un problème avec l\'opération fetch: ', error);
      // window.location.href = "page_erreur.html";
    });
  }

  return (
    <>
      <div className={styles.background}>
        <main className={styles.main}>
          <h2 className={styles.connexion}>Connexion</h2>
          <div className={styles.connexion_form}>
            <form className={styles.connex_form}>
              <label className={styles.pseudo}>Pseudo : </label>
              <input
                type="text"
                placeholder="  Entrer le pseudo"
                className={styles.username}
                required
              />
              <label>Mot de passe : </label>
              <input
                type="password"
                placeholder="  Entrer le mot de passe"
                className={styles.password}
                required
              />
              <div className={styles.submit}>
                <input type="submit" value="Connexion" />
              </div>
            </form>
          </div>

          <h2 className={styles.inscription}>S&apos;inscrire</h2>
          <div className={styles.inscription_form}>
            <form  onSubmit={handleSubmit} className={styles.inscrip_form}>
              <label htmlFor="lastname">Nom :</label>
              <input
                type="text"
                placeholder="  Entrer le nom"
                className={styles.lastname}
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
              />
              <label htmlFor="firstname">Prénom :</label>{" "}
              <input
                type="text"
                placeholder="  Entrer le prénom"
                className={styles.firstname}
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
              />
              <label htmlFor="pseudo">Pseudo :</label>
              <input
                type="text"
                placeholder="  Entrer le pseudo"
                className={styles.pseudo}
                value={pseudo}
                onChange={(e)=>setPseudo(e.target.value)}
              />
              <label htmlFor="email">Email :</label>
              <input
                type="text"
                placeholder="  Entrer l'email"
                className={styles.email}
                value={mail}
                onChange={(e)=>setMail(e.target.value)}
              />
              <label htmlFor="password">Mot de passe :</label>
              <input
                type="password"
                placeholder="  Entrer le mot de passe"
                className={styles.pass}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <div className={styles.submit2}>
                <input type="submit" value="S'inscrire" />
               
              </div>
            </form>

            { responseTest === "OK" && (<div className={styles.message}>Le compte a bien été créé !</div>)}
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
