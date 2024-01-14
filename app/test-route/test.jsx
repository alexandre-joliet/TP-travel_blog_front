/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useAsyncFetch } from "@/app/hooks/useAsyncFetch";
import Spinner from "@/app/Components/Spinner/Spinner";
import { useCheckAuth } from "@/app/hooks/useCheckAuth";
import { useRouter } from "next/navigation";


const CategoryManagement = () => {

  const { isConnected, userData } = useCheckAuth();
  console.log(userData);


  // TODO: A revoir
  const router = useRouter();

  useEffect(() => {
    if (userData.label !== "Admin") {
      router.replace("/");
    }
  })

  

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

  // TODO: A revoir
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

  // TODO: URL à adapter
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
  /**
   * @param {Event} event
   */
  const handleUpdateCategory = async (event, id) => {
    event.preventDefault();

    const formHTML = event.currentTarget.closest("form");
    const formData = new FormData(formHTML);
    const updatedCategoryName = formData.get("name");

    try {
      const response = await fetch(`http://localhost:3000/category/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `label=${updatedCategoryName}`,
      });

      const result = await response.json();
    } catch (error) {
      console.error("Erreur lors de la modification de la catégorie : ", error);
    } finally {
      const responseGet = await fetch("http://localhost:3000/categories");
      const updatedCategoriesList = await responseGet.json();
      setAllCategories(updatedCategoriesList);
    }

    formHTML.reset();
  };

  // TODO: URL à adapter
  const handleDeleteCategory = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/category/${id}`, {
        method: "DELETE",
      });
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
    {isConnected && 
      <h1 className={styles.main__title}>Gestion des catégories</h1>
    }

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
              <div key={result.id}>
                <h3 className={styles.category__label}>{result.label}</h3>
                <div className={styles.categories}>
                  <p className={styles.category__info}>
                    <b>Modifier la catégorie</b>
                  </p>
                  <form className={styles.category__edit_form}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nouveau nom de la catégorie"
                      className={styles.edit__form_input}
                    />
                    <input
                      type="submit"
                      value="Modifier"
                      onClick={(event) =>
                        handleUpdateCategory(event, result.id)
                      }
                      className={styles.edit__form_submit}
                    />
                  </form>
                  <div className={styles.category__info}>
                    <p>
                      <b>Supprimer la catégorie</b>
                    </p>
                  </div>
                  <img
                    onClick={() => handleDeleteCategory(result.id)}
                    src="/images/trash-bin.png"
                    alt="Supprimer la catégorie"
                    title="Supprimer la catégorie"
                    className={styles.delete__button}
                  ></img>
                </div>
              </div>
            ))}
        </section>
      </div>
    </main>
  );
};

export default CategoryManagement;
