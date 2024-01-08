"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const Categories = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch("https://api-travel-blog.onrender.com/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMyData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Catégories</h1>
      <section className={styles.section__categories}>
        {myData &&
          myData.map((result) => (
            <Link
              key={result.id}
              className={styles.section__category}
              href={`/Category/${result.id}/articles`}
            >
              {result.label}
            </Link>
          ))}
      </section>
    </main>
  );
};

export default Categories;
