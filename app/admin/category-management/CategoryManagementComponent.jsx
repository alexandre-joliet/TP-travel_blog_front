/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useAsyncFetch } from "@/app/hooks/useAsyncFetch";
import Spinner from "@/app/Components/Spinner/Spinner";

const CategoryManagementComponent = (token) => {
  
  // TODO: URL à adapter
  const {
    isLoading,
    myData: categories,
    error,
  } = useAsyncFetch("https://api-travel-blog.onrender.com/categories", token.token);

  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    setAllCategories(categories);
  }, [categories]);


  const [newCategory, setNewCategory] = useState("");

  // TODO: URL à adapter
  const handleCreateCategory = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://api-travel-blog.onrender.com/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token.token}`,
        },
        body: `label=${newCategory}&creator="1"`,
      });
    } catch (error) {
      console.error("Erreur lors de la création de la catégorie : ", error);
    } finally {
      const responseGet = await fetch("https://api-travel-blog.onrender.com/categories");
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
      const response = await fetch(`https://api-travel-blog.onrender.com/category/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token.token}`
        },
        body: `label=${updatedCategoryName}`,
      });

      const result = await response.json();
    } catch (error) {
      console.error("Erreur lors de la modification de la catégorie : ", error);
    } finally {
      const responseGet = await fetch("https://api-travel-blog.onrender.com/categories");
      const updatedCategoriesList = await responseGet.json();
      setAllCategories(updatedCategoriesList);
    }

    formHTML.reset();
  };

  // TODO: URL à adapter
  const handleDeleteCategory = async (id) => {
    try {
      const response = await fetch(`https://api-travel-blog.onrender.com/category/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      });
    } catch (error) {
      console.error("Erreur lors de la suppresion de la catégorie : ", error);
    } finally {
      const responseGet = await fetch("https://api-travel-blog.onrender.com/categories");
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

export default CategoryManagementComponent;
