import Link from "next/link";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import checkIsAdmin from "@/middlewares/checkIsAdmin";

const Admin = () => {
  const isAdmin = checkIsAdmin();

  if (!isAdmin) {
    redirect("/");
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>Administration du site</h1>

      <section className={styles.main__adminContainer}>
      <Link href="/admin/user-management" className={styles.main__link}>
        Gestion des utilisateurs
      </Link>
      <Link href="/admin/category-management" className={styles.main__link}>
        Gestion des catégories
      </Link>
      <Link href="/admin/article-management" className={styles.main__link}>
        Gestion des articles
      </Link>
      </section>
    </main>
  );
};

export default Admin;
