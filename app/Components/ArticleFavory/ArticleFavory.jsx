"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function ArticleFavory({ data }) {
  const [myData, setMyData] = useState([]);

  const HandleClick = () => {
    fetch("https://api-oblog2.onrender.com/favorites")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMyData(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className={styles.article}>
      <img
        className={styles.img_article}
        src={data.image}
        alt="image de l'article "
      ></img>
      <h3 className={styles.article_title}>{data.title}</h3>
      <div className={styles.text}>
        <div className={styles.auteur_date}>
          <h5 className={styles.pseudo}>{data.pseudo}</h5>
          <h5 className={styles.date}>{data.created_date}</h5>
        </div>
        <p className={styles.description}>{data.description}</p>
        <h5 className={styles.category}>{data.label}</h5>
        <div className={styles.button}>
          <button onClick={HandleClick}>
            <span class="material-symbols-outlined">favorite</span>
          </button>
        </div>
      </div>
    </div>
  );
}