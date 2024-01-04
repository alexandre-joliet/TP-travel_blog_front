/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function Article({ data }) {
  const [myData, setMyData] = useState([]);

  const convertedDate = dayjs(`${data.created_date}`).format("DD/MM/YY");

  const HandleClick = () => {
    fetch("https://api-oblog2.onrender.com/article.id")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMyData(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <article className={styles.article}>
        <Link className={styles.article__link} href={`/Article/${data.id}`}>
          <img
            className={styles.article__img}
            src={data.image}
            alt="image de l'article "
          ></img>
          <button
            className={styles.favorite__button_empty}
            onClick={HandleClick}
          >
            <img src="./images/heart-empty.png" alt=""></img>
          </button>
          <button
            className={styles.favorite__button_full}
            onClick={HandleClick}
          >
            <img src="./images/heart-full.png" alt=""></img>
          </button>
        </Link>

        <h3 className={styles.article__category}>{data.label}</h3>

        <Link className={styles.article__link} href={`/Article/${data.id}`}>
          <h2 className={styles.article__title}>{data.title}</h2>
        </Link>
        <section className={styles.article__text}>
          <div className={styles.article__auteur_date}>
            <img
              className={styles.auteur__img}
              src="./images/john.jpg"
              alt="Avatar de l'auteur"
            ></img>
            <p className={styles.article__pseudo}>{data.pseudo}</p>
            <span className={styles.auteur_date__span}>-</span>
            <p className={styles.article__date}>{convertedDate}</p>
          </div>
          <p className={styles.article__description}>{data.description}</p>
          <Link className={styles.article__link_continue} href={`/Article/${data.id}`}>Continuer la lecture</Link>
        </section>
      </article>
    </>
  );
}
