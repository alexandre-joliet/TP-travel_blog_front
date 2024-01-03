"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import AricleFavory from "../../Components/ArticleFavory/ArticleFavory"
import { useEffect, useState } from "react";

const Favorites = ({data, params}) => {

  const [myData, setMyData] = useState([]);

 useEffect(() => {
    fetch(`https://api-oblog2.onrender.com/favorites/${params.id}`)
      .then((response) => response.json())
     .then((data) => {
        console.log(data);
       setMyData(data);
    })
      .catch((error) => console.error(error));
  }, [params.id]);

  return (
    <>
      <div className={styles.div}>
        <main>
          <h1 className={styles.favorites}>Favoris</h1>
         
         <AricleFavory></AricleFavory>

        </main>
      </div>
    </>
  );
};

export default Favorites;
