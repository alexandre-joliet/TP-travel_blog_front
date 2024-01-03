"use client";

import styles from "./page.module.css";
import Article from "./Components/Article/Article";
import Search from "./Components/Search/Search";
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
      <main className={styles.main}>
        <h1 className={styles.main__title}>O&apos;Voyages</h1>

        {/* <Search></Search> */}

        <div className={styles.main__articles}>
          {myData &&
            myData.map((result) => <Article key={result.id} data={result} />)}
        </div>
      </main>
    </>
  );
}
