"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Article from "../../../Components/Article/Article";
import { useEffect, useState } from "react";

const Category = ({ data, params }) => {
  const [myData, setMyData] = useState([]);
  console.log(params);
  useEffect(() => {
    fetch(`https://api-oblog2.onrender.com/Category/${params.id}/articles`)
    
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
          <h1 className={styles.title}>{myData.label}</h1>


          {/*<label for='site-search'></label>
   <input type='search' id='site-search'name='q'/>
   <button>Recherche</button>*/}

          <div className={styles.articles}>
          {myData &&
              myData.map((result) => <Article key={result.id} data={result} />)}
          </div>
        </main>
      </div>
    </>
  );
  
};

export default Category;
