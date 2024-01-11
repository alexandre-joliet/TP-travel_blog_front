"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [role_id, setRole_id] = useState("2");
  const [pseudo, setPseudo] = useState("");
  const [createAccountValidation, setCreateAccountValidation] = useState(false);

  const [mailLogin, setMailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const router = useRouter();

  const handleSubmitLogin = async (event) => {
    event.preventDefault();

    // TODO: A repasser sur la bonne URL en prod
    await fetch("http://localhost:3000/login", { //https://api-travel-blog.onrender.com/login
      method: "POST",
      host: "api-travel-blog.onrender.com",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `mail=${mailLogin}&password=${passwordLogin}`,
      credentials: "include"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        router.push('/');
        
      })
      .catch((error) => {
        console.log(error);
        console.error("Un problème est survenu lors de la connexion : ", error);
      });
  };

  const handleSubmitSignup = async (event) => {
    event.preventDefault();

    await fetch("https://api-travel-blog.onrender.com/signup", {
      method: "POST",
      host: "api-travel-blog.onrender.com",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `last_name=${lastName}&first_name=${firstName}&avatar=&mail=${mail}&pseudo=${pseudo}N&password=${password}&role_id=${role_id}`,
    })
      .then((response) => {
        console.log(response);

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        setCreateAccountValidation(true);
        return { response };
      })
      .catch((error) => {
        console.log(error);
        console.error(
          "Un problème est survenu lors de la création de compte : ",
          error
        );
      });
  };

  return (
    <main className={styles.main}>
      <div className={styles.signin__container}>
        <h2 className={styles.signin__title}>Connexion</h2>
        <form onSubmit={handleSubmitLogin} className={styles.signin__form}>
          <label className={styles.signin__form_text}>Adresse mail :</label>
          <input
            type="text"
            placeholder="Entrez l'adresse mail"
            className={styles.signin__form_input}
            value={mailLogin}
            onChange={(event) => setMailLogin(event.target.value)}
            required
          />
          <label className={styles.signin__form_text}>Mot de passe :</label>
          <input
            type="password"
            placeholder="Entrez le mot de passe"
            className={styles.signin__form_input}
            value={passwordLogin}
            onChange={(event) => setPasswordLogin(event.target.value)}
            required
          />
          <input
            type="submit"
            value="Valider"
            className={styles.signin__form_submit}
          />
        </form>
      </div>

      <div className={styles.signup__container}>
        <h2 className={styles.signup__title}>S&apos;inscrire</h2>
        <form onSubmit={handleSubmitSignup} className={styles.signup__form}>
          <label htmlFor="lastname" className={styles.signup__form_text}>
            Nom :
          </label>
          <input
            type="text"
            placeholder="Entrez votre nom"
            className={styles.signup__form_input}
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <label htmlFor="firstname" className={styles.signup__form_text}>
            Prénom :
          </label>
          <input
            type="text"
            placeholder="Entrez votre prénom"
            className={styles.signup__form_input}
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <label htmlFor="pseudo" className={styles.signup__form_text}>
            Pseudo :
          </label>
          <input
            type="text"
            placeholder="Entrez votre pseudo"
            className={styles.signup__form_input}
            value={pseudo}
            onChange={(event) => setPseudo(event.target.value)}
          />
          <label htmlFor="email" className={styles.signup__form_text}>
            Email :
          </label>
          <input
            type="text"
            placeholder="Entrez votre adresse mail"
            className={styles.signup__form_input}
            value={mail}
            onChange={(event) => setMail(event.target.value)}
          />
          <label htmlFor="password" className={styles.signup__form_text}>
            Mot de passe :
          </label>
          <input
            type="password"
            placeholder="Entrez votre mot de passe"
            className={styles.signup__form_input}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="submit"
            value="S'inscrire"
            className={styles.signup__form_submit}
          />
        </form>

        {createAccountValidation === true && (
          <div className={styles.signup__validationMessage}>
            <p>Le compte a bien été créé.</p>
            <p>Vous pouvez dès à présent vous connecter &#127881; !</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Login;
