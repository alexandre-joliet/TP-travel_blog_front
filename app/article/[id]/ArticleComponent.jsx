/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const ArticleComponent = ({ data, params }) => {
  const [myData, setMyData] = useState([]);

  let convertedDate = dayjs(`${myData.created_date}`).format("DD/MM/YY");

  useEffect(() => {
    fetch(`https://api-travel-blog.onrender.com/article/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setMyData(data);
      })
      .catch((error) => console.error(error));
  }, [params.id]);

  const HTMLObject = { __html: <div>${myData.content}</div>}
  const HTMLText = { __html: HTMLObject.__html.props.children[1] }

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <img
          className={styles.article__image}
          src={myData.image}
          alt="photo de paysage"
        ></img>
        <Link className={styles.article__category} href={`/Category/${myData.categoryid}/articles`}>{myData.label}</Link>

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
        <div dangerouslySetInnerHTML={HTMLText} className={styles.article__text}></div>
      </article>
    </main>
  );
};

export default ArticleComponent;
