"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Articles/page.module.css";
import Article from "./Components/Article/Article";
import Search from "./Components/Search/Search"
import { useEffect, useState } from "react";


export default function Home() {
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
          <h1 className={styles.title}>O&apos;Voyages</h1>

  <Search></Search>

          <div className={styles.articles}>
            {myData &&
              myData.map((result) => <Article key={result.id} data={result} />)}
       
          </div>
        </main>
      </div>
    </>
  );
}
