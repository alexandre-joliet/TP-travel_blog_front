/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./page.module.css";
import Spinner from "@/app/Components/Spinner/Spinner";
import { useRouter } from "next/navigation";
import { redirect } from 'next/navigation';
import checkIsAdmin from '@/middlewares/checkIsAdmin';
import CategoryManagementComponent from "./category-management";

const CategoryManagement = () => {

  const isAdmin = checkIsAdmin();

  if (!isAdmin) {
    redirect('/')
  }

  return (
    <>
      <CategoryManagementComponent />
    </>
  );
};

export default CategoryManagement;
