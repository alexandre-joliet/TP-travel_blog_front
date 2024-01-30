"use client";
import styles from "./page.module.css";
import Article from "../../../Components/Article/Article";
import { useEffect, useState } from "react";

const CategoryComponent = ({ data, params }) => {
  const [myData, setMyData] = useState([]);
  const [label, setLabel] = useState("");

  useEffect(() => {
    fetch(`https://api-travel-blog.onrender.com/category/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setLabel(data.label);
      })
      .catch((error) => console.error(error));
  }, [params.id]);

  useEffect(() => {
    fetch(`https://api-travel-blog.onrender.com/category/${params.id}/articles`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setMyData(data);
      })
      .catch((error) => console.error(error));
  }, [params.id]);

  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>{label}</h1>
      <div className={styles.main__articles}>
        {myData &&
          myData.map((result) => <Article key={result.id} data={result} />)}
      </div>
    </main>
  );
};

export default CategoryComponent;
