"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Joi, { valid } from "joi";

const LoginComponent = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [role_id, setRole_id] = useState("2");
  const [pseudo, setPseudo] = useState("");
  const [createAccountValidation, setCreateAccountValidation] = useState(false);

  const [mailLogin, setMailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [loginMailErrorMessage, setLoginMailErrorMessage] = useState(false);
  const [loginFormErrorMessage, setLoginFormErrorMessage] = useState(false);

  const loginMailValidation = (event) => {
    const value = event.target.value;
    setMailLogin(value);

    const schema = Joi.string().email({ tlds: false });
    const validation = schema.validate(value);

    if (validation.error != undefined) {
      setLoginMailErrorMessage(true);
    } else {
      setLoginMailErrorMessage(false);
    }

    if (value === "") {
      setLoginMailErrorMessage(false);
    }
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();

    const schema = Joi.object({
      mail: Joi.string().email({ tlds: false }).required(),

      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")),
    });

    const validation = schema.validate({
      mail: `${mailLogin}`,
      password: `${passwordLogin}`,
    });

    if (validation.error === undefined) {
      try {
        // TODO: A repasser sur la bonne URL en prod
        const response = await fetch("https://api-travel-blog.onrender.com/login", {
          method: "POST",
          host: "api-travel-blog.onrender.com",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `mail=${mailLogin}&password=${passwordLogin}`,
          credentials: "include",
        });
        const userFound = await response.json();

        if (userFound.error) {
          setLoginFormErrorMessage(true)
        } else {

          // window.location.reload();
        }
      } catch (error) {
        console.log(error);
        console.error("Un problème est survenu lors de la connexion : ", error);
      }
    } else {
      setLoginFormErrorMessage(true);
    }
  };

  const [signupLastNameErrorMessage, setSignupLastNameErrorMessage] =
    useState(false);

  const signupLastNameValidation = (event) => {
    const value = event.target.value;
    setLastName(value);

    const schema = Joi.string().pattern(
      new RegExp(/^[a-zàâçéèêëîïôûùüÿñæœ -]*$/i)
    );
    const validation = schema.validate(value);

    if (validation.error != undefined) {
      setSignupLastNameErrorMessage(true);
    } else {
      setSignupLastNameErrorMessage(false);
    }

    if (value === "") {
      setSignupLastNameErrorMessage(false);
    }
  };

  const [signupFirstNameErrorMessage, setSignupFirstNameErrorMessage] =
    useState(false);

  const signupFirstNameValidation = (event) => {
    const value = event.target.value;
    setFirstName(value);

    const schema = Joi.string().pattern(
      new RegExp(/^[a-zàâçéèêëîïôûùüÿñæœ -]*$/i)
    );
    const validation = schema.validate(value);

    if (validation.error != undefined) {
      setSignupFirstNameErrorMessage(true);
    } else {
      setSignupFirstNameErrorMessage(false);
    }

    if (value === "") {
      setSignupFirstNameErrorMessage(false);
    }
  };

  const [signupMailErrorMessage, setSignupMailErrorMessage] = useState(false);

  const signupMailValidation = (event) => {
    const value = event.target.value;
    setMail(value);

    const schema = Joi.string().email({ tlds: false });
    const validation = schema.validate(value);

    if (validation.error != undefined) {
      setSignupMailErrorMessage(true);
    } else {
      setSignupMailErrorMessage(false);
    }

    if (value === "") {
      setSignupMailErrorMessage(false);
    }
  };

  const [signupPseudoErrorMessage, setSignupPseudoErrorMessage] =
    useState(false);

  const signupPseudoValidation = (event) => {
    const value = event.target.value;
    setPseudo(value);

    const schema = Joi.string().pattern(
      new RegExp(/^[a-zàâçéèêëîïôûùüÿñæœ0-9 \-_@]*$/i)
    );
    const validation = schema.validate(value);

    if (validation.error != undefined) {
      setSignupPseudoErrorMessage(true);
    } else {
      setSignupPseudoErrorMessage(false);
    }

    if (value === "") {
      setSignupPseudoErrorMessage(false);
    }
  };

  const [signupPasswordErrorMessage, setSignupPasswordErrorMessage] =
    useState(false);

  const signupPasswordValidation = (event) => {
    const value = event.target.value;
    setPassword(value);

    const schema = Joi.string().pattern(
      new RegExp(/^[a-zàâçéèêëîïôûùüÿñæœ0-9 \-_@]{8,12}$/i)
    );
    const validation = schema.validate(value);

    if (validation.error != undefined) {
      setSignupPasswordErrorMessage(true);
    } else {
      setSignupPasswordErrorMessage(false);
    }

    if (value === "") {
      setSignupPasswordErrorMessage(false);
    }
  };

  const [signupFormErrorMessage, setSignupFormErrorMessage] = useState(false);

  const handleSubmitSignup = async (event) => {
    event.preventDefault();

    const schema = Joi.object({
      lastname: Joi.string().pattern(
        new RegExp(/^[a-zàâçéèêëîïôûùüÿñæœ -]*$/i)
      ),

      firstname: Joi.string().pattern(
        new RegExp(/^[a-zàâçéèêëîïôûùüÿñæœ -]*$/i)
      ),

      pseudo: Joi.string().pattern(
        new RegExp(/^[a-zàâçéèêëîïôûùüÿñæœ0-9 \-_@]*$/i)
      ),

      mail: Joi.string().email({ tlds: false }),

      password: Joi.string().pattern(
        new RegExp(/^[a-zàâçéèêëîïôûùüÿñæœ0-9 \-_@]{8,12}$/i)
      ),
    });

    const validation = schema.validate({
      lastname: `${lastName}`,
      firstname: `${firstName}`,
      pseudo: `${pseudo}`,
      mail: `${mail}`,
      password: `${password}`,
    });

    if (validation.error === undefined) {
      try {
        const response = await fetch(
          "http://localhost:3000/signup", // https://api-travel-blog.onrender.com/signup
          {
            method: "POST",
            // host: "api-travel-blog.onrender.com",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `last_name=${lastName}&first_name=${firstName}&avatar=&mail=${mail}&pseudo=${pseudo}&password=${password}&role_id=${role_id}`,
          }
        );

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        setCreateAccountValidation(true);
        setPassword('');
        
      } catch (error) {
        console.log(error);
        console.error(
          "Un problème est survenu lors de la création de compte : ",
          error
        );
      }
    } else {
      setSignupFormErrorMessage(true);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.signin__container}>
        <h2 className={styles.signin__title}>Connexion</h2>
        <form onSubmit={handleSubmitLogin} className={styles.signin__form}>
          <label id="maillogin" className={styles.signin__form_text}>
            Adresse mail :
          </label>
          <input
            type="mail"
            placeholder="Entrez l'adresse mail"
            className={styles.signin__form_input}
            value={mailLogin}
            id="maillogin"
            // onChange={(event) => setMailLogin(event.target.value)}
            onChange={(event) => loginMailValidation(event)}
            required
          />
          {loginMailErrorMessage === true && (
            <div className={styles.error__message}>
              L&apos;adresse mail n&apos;est pas valide
            </div>
          )}

          <label id="passwordlogin" className={styles.signin__form_text}>
            Mot de passe :
          </label>
          <input
            type="password"
            placeholder="Entrez le mot de passe"
            className={styles.signin__form_input}
            value={passwordLogin}
            id="passwordlogin"
            onChange={(event) => setPasswordLogin(event.target.value)}
            required
          />
          <input
            type="submit"
            value="Valider"
            className={styles.signin__form_submit}
          />
        </form>
        {loginFormErrorMessage === true && (
          <div className={styles.error__message_form}>
            Les informations saisies ne sont pas correctes. Merci de les
            corriger.
          </div>
        )}
      </div>

      <div className={styles.signup__container}>
        <h2 className={styles.signup__title}>Inscription</h2>
        <form onSubmit={handleSubmitSignup} className={styles.signup__form}>
          <label id="lastname" className={styles.signup__form_text}>
            Nom :
          </label>
          <input
            type="text"
            placeholder="Entrez votre nom"
            className={styles.signup__form_input}
            value={lastName}
            // onChange={(event) => setLastName(event.target.value)}
            onChange={(event) => signupLastNameValidation(event)}
            id="lastname"
          />
          {signupLastNameErrorMessage === true && (
            <div className={styles.error__message}>
              Le nom n&apos;est pas valide. Il ne peut pas contenir de nombres ou de
              caractères spéciaux.
            </div>
          )}

          <label id="firstname" className={styles.signup__form_text}>
            Prénom :
          </label>
          <input
            type="text"
            placeholder="Entrez votre prénom"
            className={styles.signup__form_input}
            value={firstName}
            // onChange={(event) => setFirstName(event.target.value)}
            onChange={(event) => signupFirstNameValidation(event)}
            id="firstname"
          />
          {signupFirstNameErrorMessage === true && (
            <div className={styles.error__message}>
              Le prénom n&apos;est pas valide. Il ne peut pas contenir de nombres ou
              de caractères spéciaux.
            </div>
          )}

          <label id="pseudo" className={styles.signup__form_text}>
            Pseudo :
          </label>
          <input
            type="text"
            placeholder="Entrez votre pseudo"
            className={styles.signup__form_input}
            value={pseudo}
            // onChange={(event) => setPseudo(event.target.value)}
            onChange={(event) => signupPseudoValidation(event)}
            id="pseudo"
          />
          {signupPseudoErrorMessage === true && (
            <div className={styles.error__message}>
              Le pseudo n&apos;est pas valide. Seuls les caractères spéciaux -, _ et
              @ sont acceptés.
            </div>
          )}

          <label id="email" className={styles.signup__form_text}>
            Email :
          </label>
          <input
            type="mail"
            placeholder="Entrez votre adresse mail"
            className={styles.signup__form_input}
            value={mail}
            // onChange={(event) => setMail(event.target.value)}
            onChange={(event) => signupMailValidation(event)}
            id="email"
          />
          {signupMailErrorMessage === true && (
            <div className={styles.error__message}>
              L&apos;adresse mail n&apos;est pas valide
            </div>
          )}

          <label id="password" className={styles.signup__form_text}>
            Mot de passe :
          </label>
          <input
            type="text"
            placeholder="Entrez votre mot de passe"
            className={styles.signup__form_input}
            value={password}
            // onChange={(event) => setPassword(event.target.value)}
            onChange={(event) => signupPasswordValidation(event)}
            id="password"
          />
          {signupPasswordErrorMessage === true && (
            <div className={styles.error__message}>
              Le mot de passe n&apos;est pas valide. Il doit faire entre 8 et 12
              caractères. Seuls les caractères spéciaux -, _ et @ sont acceptés.
            </div>
          )}

          <input
            type="submit"
            value="S'inscrire"
            className={styles.signup__form_submit}
          />
        </form>
        {signupFormErrorMessage === true && (
          <div className={styles.error__message_form}>
            Les informations saisies ne sont pas conformes. Merci de les
            corriger.
          </div>
        )}

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

export default LoginComponent;
