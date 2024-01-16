import { redirect } from "next/navigation";
import checkAuth from "@/middlewares/checkAuth";
import checkIsAdmin from "@/middlewares/checkIsAdmin";
import CategoryManagementComponent from "./CategoryManagementComponent";
import Header from "@/app/Components/Header/Header";

const CategoryManagement = () => {
  const isConnected = checkAuth();
  const isAdmin = checkIsAdmin();

  if (!isAdmin) {
    redirect("/");
  }

  return (
    <>
      <Header isConnected={isConnected} isAdmin={isAdmin} />
      <CategoryManagementComponent />
    </>
  );
};

export default CategoryManagement;
