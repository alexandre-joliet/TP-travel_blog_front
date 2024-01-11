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
  // // TODO: A revoir
  // const { isConnected, userData } = useCheckAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   if (isConnected === false || userData.label !== "Admin") {
  //     router.replace("/");
  //   }
  // })

  // TODO: URL à adapter
  const {
    isLoading,
    myData: categories,
    error,
  } = useAsyncFetch("http://localhost:3000/categories"); // https://api-travel-blog.onrender.com/admin/users

  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    setAllCategories(categories);
  }, [categories]);

  // // TODO: A revoir
  // if (isConnected === false || userData.label !== "Admin") {
  //   return (
  //     <>
  //       <h1>
  //         Vous n&apos;avez pas accès à cette page, merci de vous créer un compte
  //         et de vous connecter.
  //       </h1>
  //     </>
  //   );
  // }

  const [newCategory, setNewCategory] = useState("");

  const handleCreateCategory = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `label=${newCategory}&creator="1"`,
      });
    } catch (error) {
      console.error("Erreur lors de la création de la catégorie : ", error);
    } finally {
      const responseGet = await fetch("http://localhost:3000/categories");
      const updatedCategoriesList = await responseGet.json();
      setAllCategories(updatedCategoriesList);
    }
  };

  // TODO: URL à adapter
  const handleDeleteCategory = async (id) => {
    try {
      const responseDelete = await fetch(
        `http://localhost:3000/category/${id}`,
        {
          method: "DELETE",
        }
      );
    } catch (error) {
      console.error("Erreur lors de la suppresion de la catégorie : ", error);
    } finally {
      const responseGet = await fetch("http://localhost:3000/categories");
      const updatedCategoriesList = await responseGet.json();
      setAllCategories(updatedCategoriesList);
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>Gestion des catégories</h1>

      <div className={styles.main__categoriesContainer}>
        <section className={styles.categories__creation}>
          <h2>Création d&apos;une nouvelle catégorie</h2>
          <form className={styles.category__creation_form}>
            <input
              type="text"
              placeholder="Entrez le nom de la nouvelle catégorie"
              onChange={(event) => setNewCategory(event.target.value)}
              value={newCategory}
              className={styles.creation__form_input}
            />
            <input
              type="submit"
              value="Valider"
              onClick={handleCreateCategory}
              className={styles.creation__form_submit}
            />
          </form>
        </section>

        <section className={styles.categories__edition}>
          <h2>Edition et suppression des catégories</h2>
          {isLoading && <Spinner />}

          {allCategories &&
            allCategories.map((result) => (
              <>
                <h3 className={styles.category__label}>{result.label}</h3>
                <div
                  key={result.id}
                  data={result}
                  className={styles.categories}
                >
                  <p className={styles.category__info}>
                    <b>Modifier la catégorie</b>
                  </p>
                  <form className={styles.category__edit_form}>
                    <input
                      type="text"
                      placeholder="Entrez le nouveau nom de la catégorie"
                      onChange=""
                      value=""
                      className={styles.edit__form_input}
                    />
                    <input
                      type="submit"
                      value="Modifier"
                      onClick=""
                      className={styles.edit__form_submit}
                    />
                  </form>
                  <div className={styles.category__info}>
                    <p>
                      <b>Supprimer la catégorie</b>
                    </p>
                    {/* <p>{result.label}</p> */}
                  </div>
                  <img
                    onClick={() => handleDeleteCategory(result.id)}
                    src="/images/trash-bin.png"
                    alt="Supprimer la catégorie"
                    title="Supprimer la catégorie"
                    className={styles.delete__button}
                  ></img>
                </div>
              </>
            ))}
        </section>
      </div>
    </main>
  );
};

export default UserManagement;
