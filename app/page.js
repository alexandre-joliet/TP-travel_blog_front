"use client";
import styles from "./page.module.css";
import Article from "./Components/Article/Article";
import Search from "./Components/Search/Search";
import Spinner from "./Components/Spinner/Spinner";
import { useEffect, useState } from "react";
import { useAsyncFetch } from "./hooks/useAsyncFetch";

export default function Home() {
  const {
    isLoading,
    myData: articles,
    error,
  } = useAsyncFetch("https://api-travel-blog.onrender.com/articles");

  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>O&apos;Voyages</h1>
      <div className={styles.main__textcontainer}>
        <h2 className={styles.main__subtitle}>
          Bienvenue sur O&apos;VOyages !
        </h2>
        <p className={styles.main__introtext}>
          Bienvenue sur mon blog, où vous trouverez ici une passerelle vers mes
          aventures, mes expériences uniques et mes destinations favorites. Que
          vous soyez un voyageur aguerri ou un explorateur en herbe, ce blog est
          votre guide pour plonger avec moi au cœur de destinations fascinantes
          à travers le globe.
        </p>
        <p className={styles.main__introtext}>
          Ici, chaque récit est une invitation à l&apos;évasion, chaque image
          est une fenêtre ouverte sur de nouveaux horizons. Des villes
          cosmopolites aux paysages enchanteurs, des trésors culturels aux
          expériences culinaires, chaque article est une promesse de découvertes
          inoubliables.
        </p>
        <p className={styles.main__introtext}>
          Attachez votre ceinture, ouvrez grands vos yeux et préparez-vous à
          être transporté vers des contrées lointaines. L&apos;aventure commence
          ici.
        </p>
      </div>

      {/* <Search></Search> */}

      {isLoading && <Spinner />}
      <div className={styles.main__articles}>
        {articles &&
          articles.map((result) => <Article key={result.id} data={result} />)}
      </div>
    </main>
  );
}
