"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const Categories = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch("https://api-oblog2.onrender.com/categories")
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
          <h1 className={styles.title}>Catégories</h1>
          <div className={styles.categories}>
            {myData &&
              myData.map((result) => (
                <Link
                  key={result.id}
                  className={styles.categorie}
                  href={`/Category/${result.id}/articles`}
                >
                  {result.label}
                </Link>
              ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Categories;
