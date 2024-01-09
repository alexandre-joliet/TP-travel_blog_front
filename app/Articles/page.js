"use client";
import React from "react";
import styles from "./page.module.css";
import Article from "../Components/Article/Article";
import { useEffect, useState } from "react";
import { useAsyncFetch } from "../hooks/useAsyncFetch";
import Spinner from "../Components/Spinner/Spinner";

const Articles = () => {
  const {
    isLoading,
    myData: articles,
    error,
  } = useAsyncFetch("https://api-travel-blog.onrender.com/articles");

  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>Articles</h1>
      {isLoading && <Spinner />}
      <div className={styles.main__articles}>
        {articles &&
          articles.map((result) => <Article key={result.id} data={result} />)}
      </div>
    </main>
  );
};

export default Articles;
