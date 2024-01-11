/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useAsyncFetch } from "@/app/hooks/useAsyncFetch";
import Spinner from "@/app/Components/Spinner/Spinner";
import { useCheckAuth } from "@/app/hooks/useCheckAuth";
import { useRouter } from "next/navigation";

const UserManagement = () => {
  // TODO: A revoir
  const { isConnected, userData } = useCheckAuth();
  const router = useRouter();

  if (isConnected === false || userData.label !== "Admin") {
    router.push("/");
  }

  // TODO: URL à adapter
  const {
    isLoading,
    myData: users,
    error,
  } = useAsyncFetch("http://localhost:3000/admin/users"); // https://api-travel-blog.onrender.com/admin/users

  const [allUsers, setAllusers] = useState([]);

  useEffect(() => {
    setAllusers(users);
  }, [users]);

  // TODO: A revoir
  if (isConnected === false || userData.label !== "Admin") {
    return (
      <>
        <h1>
          Vous n&apos;avez pas accès à cette page, merci de vous créer un compte
          et de vous connecter.
        </h1>
      </>
    );
  }

  const handleDeleteAccount = async (id) => {
    try {
      const responseDelete = await fetch(
        `http://localhost:3000/admin/users/${id}`,
        {
          method: "DELETE",
        }
      );

      const responseGet = await fetch("http://localhost:3000/admin/users");
      const updatedUsersList = await responseGet.json();
      setAllusers(updatedUsersList);
    } catch (error) {
      console.error("Erreur lors de la suppresion du compte : ", error);
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>Liste des utilisateurs</h1>

      {isLoading && <Spinner />}

      <section className={styles.main__usersContainer}>
        {allUsers &&
          allUsers.map((result) => (
            <div key={result.id} data={result} className={styles.user}>
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
                alt="logo"
                className={styles.delete__button}
              ></img>
            </div>
          ))}
      </section>
    </main>
  );
};

export default UserManagement;
