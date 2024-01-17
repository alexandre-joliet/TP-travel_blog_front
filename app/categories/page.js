import checkAuth from "@/middlewares/checkAuth";
import checkIsAdmin from "@/middlewares/checkIsAdmin";
import Header from "../Components/Header/Header";
import CategoriesComponent from "./CategoriesComponent";

const Categories = () => {
  const isConnected = checkAuth();
  const isAdmin = checkIsAdmin();

  return (
    <>
      <Header isConnected={isConnected} isAdmin={isAdmin} />
      <CategoriesComponent />
    </>
  );
};

export default Categories;
