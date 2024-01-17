import checkAuth from "@/middlewares/checkAuth";
import checkIsAdmin from "@/middlewares/checkIsAdmin";
import Header from "../Components/Header/Header";
import ArticlesComponent from "./ArticlesComponent";

const Articles = () => {
  const isConnected = checkAuth();
  const isAdmin = checkIsAdmin();

  return (
    <>
      <Header isConnected={isConnected} isAdmin={isAdmin} />
      <ArticlesComponent />
    </>
  );
};

export default Articles;
