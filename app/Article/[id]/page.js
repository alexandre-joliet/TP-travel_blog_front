"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
//import { format } from "date-fns";

const  Article = ({data, params}) => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch(`https://api-oblog2.onrender.com/Article/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMyData(data);
      })
      .catch((error) => console.error(error));
  }, [params.id]);

  {
    /* function convertDate(create_date) {
    return format(new Date(create_date), "dd-mm-yyyy");
  }
const convertedDate = convertDate(dateFromDb); */
  }

  return (
    <>
      <div className={styles.div}>
        <main>
        <div className={styles.article}>
          {/*    {myData &&
              myData.map((result) => <Article key={result.id} data={result} />)}*/}
            <img
              className={styles.img}
              src={myData.image}
              alt="photo de paysage"
            ></img>

            <h1 className={styles.title}>{myData.title}</h1>
            <h3 className={styles.auteur}>{myData.pseudo}</h3>
            <h3 className={styles.date}>{myData.create_date}</h3>
            <h3 className={styles.category}>{myData.categorie}</h3>
            <p className={styles.contenent}>{myData.content}</p>
          </div>
         
        </main>
      </div>
    </>
  );
}

export default Article;
