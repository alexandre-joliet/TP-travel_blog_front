/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useAsyncFetch } from "@/app/hooks/useAsyncFetch";
import Spinner from "@/app/Components/Spinner/Spinner";

const UserManagementComponent = () => {

  const {
    isLoading,
    myData: users,
    error,
  } = useAsyncFetch("https://api-travel-blog.onrender.com/admin/users"); // https://api-travel-blog.onrender.com/admin/users

  const [allUsers, setAllusers] = useState([]);

  useEffect(() => {
    setAllusers(users);
  }, [users]);

  const handleDeleteAccount = async (id) => {
    try {
      const responseDelete = await fetch(
        `https://api-travel-blog.onrender.com/admin/users/${id}`,
        {
          method: "DELETE",
        }
      );

      const responseGet = await fetch("https://api-travel-blog.onrender.com/admin/users");
      const updatedUsersList = await responseGet.json();
      setAllusers(updatedUsersList);
    } catch (error) {
      console.error("Erreur lors de la suppresion du compte : ", error);
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>Gestion des utilisateurs</h1>

      {isLoading && <Spinner />}

      <section className={styles.main__usersContainer}>
        {allUsers &&
          allUsers.map((result) => (
            <div key={result.id} className={styles.user}>
              <div className={styles.user__info}>
                <p>
                  <b>Pseudo :</b> {result.pseudo}
                </p>
                <p>
                  <b>Email :</b> {result.mail}
                </p>
              </div>
              <img
                onClick={() => handleDeleteAccount(result.id)}
                src="/images/trash-bin.png"
                alt="Supprimer le compte utilisateur"
                title="Supprimer le compte utilisateur"
                className={styles.delete__button}
              ></img>
            </div>
          ))}
      </section>
    </main>
  );
};

export default UserManagementComponent;
