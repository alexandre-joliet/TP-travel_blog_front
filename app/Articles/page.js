"use client";

import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Article from "../Components/Article/Article";
import { useEffect, useState } from "react";

const Articles = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch("https://api-oblog2.onrender.com/articles")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMyData(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div className={styles.div}>
        <main>
          <h1 className={styles.title}>Articles</h1>

          {/*<label for='site-search'></label>
   <input type='search' id='site-search'name='q'/>
   <button>Recherche</button>*/}

          <div className={styles.articles}>
            {myData &&
              myData.map((result) => <Article key={result.id} data={result} />)}
            {/*<Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>*/}
          </div>
        </main>
      </div>
    </>
  );
};

export default Articles;
