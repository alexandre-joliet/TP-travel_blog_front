/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useAsyncFetch } from "@/app/hooks/useAsyncFetch";
import Spinner from "@/app/Components/Spinner/Spinner";
import { useCheckAuth } from "@/app/hooks/useCheckAuth";
import { useRouter } from "next/navigation";

const ArticleManagement = () => {
  // TODO: A revoir
  // const { isConnected, userData } = useCheckAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   if (isConnected === false || userData.label !== "Admin") {
  //     router.replace("/");
  //   }
  // })

  const { isLoading, myData: articles } = useAsyncFetch(
    "https://api-travel-blog.onrender.com/articles"
  );

  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    setAllArticles(articles);
  }, [articles]);

  const { myData: categories } = useAsyncFetch(
    "http://localhost:3000/categories"
  ); // https://api-travel-blog.onrender.com/admin/users

  const [allCategories, setAllCategories] = useState(categories);

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

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newImage, setNewImage] = useState("");

  /**
   * @param {Event} event
   */
  const handleCreateArticle = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://api-travel-blog.onrender.com/article", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `title=${newTitle}&description=${newDescription}&content=${newContent}&image=${newImage}&category=${newCategory}`,
      });
    } catch (error) {
      console.error("Erreur lors de la création de l'article : ", error);
    } finally {
      const responseGet = await fetch("https://api-travel-blog.onrender.com/articles");
      const updatedArticlesList = await responseGet.json();
      setAllArticles(updatedArticlesList);
    }

    setNewTitle("");
    setNewDescription("");
    setNewContent("");
    setNewCategory("");
    setNewImage("");
  };

  const handleDeleteArticle = async (id) => {
    try {
      const responseDelete = await fetch(
        `https://api-travel-blog.onrender.com/article/${id}`,
        {
          method: "DELETE",
        }
      );

      const responseGet = await fetch(
        "https://api-travel-blog.onrender.com/articles"
      );
      const updatedArticleList = await responseGet.json();
      setAllArticles(updatedArticleList);
    } catch (error) {
      console.error("Erreur lors de la suppresion de l'article : ", error);
    }
  };

  const [searchedText, setSearchedText] = useState("");

  const handleChangeSearchTextInput = (event) => {
    const { value } = event.target;
    setSearchedText(value);
  };

  const filteredArticles = allArticles.filter((item) => {
    return item.description.toLowerCase().includes(searchedText.toLowerCase());
  });

  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>Gestion des articles</h1>

      <div className={styles.main__articlesContainer}>
        <section className={styles.articles__creation}>
          <h2>Création d&apos;un nouvel article</h2>
          <form className={styles.article__creation_form}>
            <div className={styles.creation__form_container}>
              <div className={styles.article__form_inputContainer}>
                <label htmlFor="title" className={styles.article__form_label}>
                  Titre
                </label>
                <input
                  type="text"
                  placeholder="Titre de l'article"
                  onChange={(event) => setNewTitle(event.target.value)}
                  value={newTitle}
                  id="title"
                  className={styles.creation__form_input}
                />
              </div>
            </div>
            <div className={styles.creation__form_container}>
              <div className={styles.article__form_inputContainer}>
                <label
                  htmlFor="description"
                  className={styles.article__form_label}
                >
                  Description
                </label>
                <textarea
                  type="textarea"
                  placeholder="Description de l'article"
                  onChange={(event) => setNewDescription(event.target.value)}
                  value={newDescription}
                  id="description"
                  className={styles.creation__form_textaera}
                />
              </div>
            </div>
            <div className={styles.creation__form_container}>
              <div className={styles.article__form_inputContainer}>
                <label
                  htmlFor="description"
                  className={styles.article__form_label}
                >
                  Contenu
                </label>
                <textarea
                  type="textarea"
                  placeholder="Contenu de l'article"
                  onChange={(event) => setNewContent(event.target.value)}
                  value={newContent}
                  id="description"
                  className={styles.creation__form_textaera}
                />
              </div>
            </div>
            <div className={styles.creation__form_container}>
              <div className={styles.article__form_inputContainer}>
                <label
                  htmlFor="category"
                  className={styles.article__form_label}
                >
                  Catégorie
                </label>
                <select
                  placeholder="Catégorie"
                  onChange={(event) => setNewCategory(event.target.value)}
                  value={newCategory}
                  id="category"
                  className={styles.creation__form_select}
                >
                  {allCategories &&
                    allCategories.map((result) => (
                      <option key={result.id}>{result.label}</option>
                    ))}
                  <option></option>
                </select>
              </div>
            </div>
            <div className={styles.creation__form_container}>
              <div className={styles.article__form_inputContainer}>
                <label htmlFor="picture" className={styles.article__form_label}>
                  URL de l&apos;image de couverture
                </label>
                <input
                  type="text"
                  placeholder="URL de l'image"
                  onChange={(event) => setNewImage(event.target.value)}
                  value={newImage}
                  id="picture"
                  className={styles.creation__form_input}
                />
              </div>
            </div>
            <input
              type="submit"
              value="Valider"
              onClick={handleCreateArticle}
              className={styles.creation__form_submit}
            />
          </form>
        </section>

        <section className={styles.articles__edition}>
          <h2>Edition et suppression des articles</h2>
          <input
            className={styles.search__input}
            type="search"
            placeholder="Rechercher un article"
            value={searchedText}
            onChange={handleChangeSearchTextInput}
          />
          {isLoading && <Spinner />}
          {filteredArticles &&
            filteredArticles.map((result) => (
              <div key={result.id}>
                <h3 className={styles.category__label}>{result.title}</h3>
                <div className={styles.categories}>
                  <p className={styles.article__info}>
                    <b>Modifier la catégorie</b>
                  </p>
                  <form className={styles.article__edit_form}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nouveau nom de la catégorie"
                      className={styles.edit__form_input}
                    />
                    <input
                      type="submit"
                      value="Modifier"
                      // onClick=""
                      className={styles.edit__form_submit}
                    />
                  </form>
                  <div className={styles.article__info}>
                    <p>
                      <b>Supprimer l&apos;article </b>
                    </p>
                  </div>
                  <img
                    onClick={() => handleDeleteArticle(result.id)}
                    src="/images/trash-bin.png"
                    alt="Supprimer l'article"
                    title="Supprimer l'article"
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

export default ArticleManagement;
