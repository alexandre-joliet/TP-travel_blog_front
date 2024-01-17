import checkAuth from "@/middlewares/checkAuth";
import checkIsAdmin from "@/middlewares/checkIsAdmin";
import Header from "@/app/Components/Header/Header";
import CategoryComponent from "./CategoryComponent";

const Category = ({ data, params }) => {
  const isConnected = checkAuth();
  const isAdmin = checkIsAdmin();

  return (
    <>
      <Header isConnected={isConnected} isAdmin={isAdmin} />
      <CategoryComponent data={data} params={params}/>
    </>
  );
};

export default Category;
