"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useAsyncFetch } from "../hooks/useAsyncFetch";
import Spinner from "../Components/Spinner/Spinner";

const Categories = () => {
  const {
    isLoading,
    myData: categories,
    error,
  } = useAsyncFetch("https://api-travel-blog.onrender.com/categories");

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Catégories</h1>
      {isLoading && <Spinner />}
      <section className={styles.section__categories}>
        {categories &&
          categories.map((result) => (
            <Link
              key={result.id}
              className={styles.section__category}
              href={`/category/${result.id}/articles`}
            >
              {result.label}
            </Link>
          ))}
      </section>
    </main>
  );
};

export default Categories;
