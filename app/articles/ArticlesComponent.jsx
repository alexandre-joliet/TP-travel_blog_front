"use client";
import styles from "./page.module.css";
import Article from "../Components/Article/Article";
import { useEffect, useState } from "react";
import { useAsyncFetch } from "../hooks/useAsyncFetch";
import Spinner from "../Components/Spinner/Spinner";

const ArticlesComponent = () => {
  const {
    isLoading,
    myData: articles,
    error,
  } = useAsyncFetch("https://api-travel-blog.onrender.com/articles");

  const [searchedText, setSearchedText] = useState("");

  const handleChangeSearchTextInput = (event) => {
    const { value } = event.target;
    setSearchedText(value);
  };

  const filteredArticles = articles.filter((item) => {
    return item.description.toLowerCase().includes(searchedText.toLowerCase());
  });

  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>Articles</h1>

      <input
        className={styles.search__input}
        type="text"
        placeholder="Recherche..."
        value={searchedText}
        onChange={handleChangeSearchTextInput}
      />

      {isLoading && <Spinner />}
      <div className={styles.main__articles}>
        {filteredArticles &&
          filteredArticles.map((result) => <Article key={result.id} data={result} />)}
      </div>
    </main>
  );
};

export default ArticlesComponent;
