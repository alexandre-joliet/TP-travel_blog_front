"use client";

import React from "react";
import styles from "./page.module.css";
import Article from "../Components/Article/Article";
import { useEffect, useState } from "react";

const Articles = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch("https://api-travel-blog.onrender.com/articles")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMyData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>Articles</h1>
      <div className={styles.main__articles}>
        {myData &&
          myData.map((result) => <Article key={result.id} data={result} />)}
      </div>
    </main>
  );
};

export default Articles;
