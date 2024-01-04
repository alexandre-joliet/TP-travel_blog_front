/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const Article = ({ data, params }) => {
  const [myData, setMyData] = useState([]);
  const [date, setDate] = useState([]);

  let convertedDate = dayjs(`${myData.created_date}`).format("DD/MM/YY");
  console.log(convertedDate);

  useEffect(() => {
    fetch(`https://api-oblog2.onrender.com/Article/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMyData(data);
      })
      .catch((error) => console.error(error));
  }, [params.id]);

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <img
          className={styles.article__image}
          src={myData.image}
          alt="photo de paysage"
        ></img>
        <h3 className={styles.article__category}>{myData.label}</h3>

        <h1 className={styles.article__title}>{myData.title}</h1>
        <div className={styles.article__auteur_date}>
          <img
            className={styles.auteur__img}
            src="../images/john.jpg"
            alt="Avatar de l'auteur"
          ></img>
          <p className={styles.article__auteur}>{myData.pseudo}</p>
          <span className={styles.auteur_date__span}>-</span>
          <p className={styles.article__date}>{convertedDate}</p>
        </div>
        <p className={styles.article__text}>{myData.content}</p>
      </article>
    </main>
  );
};

export default Article;
