import { redirect } from "next/navigation";
import checkAuth from "@/middlewares/checkAuth";
import checkIsAdmin from "@/middlewares/checkIsAdmin";
import CategoryManagementComponent from "./CategoryManagementComponent";
import Header from "@/app/Components/Header/Header";
import getToken from "@/middlewares/getToken";

const CategoryManagement = () => {
  const isConnected = checkAuth();
  const isAdmin = checkIsAdmin();

  const token = getToken();
  
  if (!isAdmin) {
    redirect("/");
  }

  return (
    <>
      <Header isConnected={isConnected} isAdmin={isAdmin} />
      <CategoryManagementComponent token={token}/>
    </>
  );
};

export default CategoryManagement;
