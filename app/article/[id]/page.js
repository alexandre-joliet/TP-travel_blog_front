import checkAuth from "@/middlewares/checkAuth";
import checkIsAdmin from "@/middlewares/checkIsAdmin";
import Header from "@/app/Components/Header/Header";
import ArticleComponent from "./ArticleComponent";

const Article = ({ data, params }) => {
  const isConnected = checkAuth();
  const isAdmin = checkIsAdmin();

  return (
    <>
      <Header isConnected={isConnected} isAdmin={isAdmin} />
      <ArticleComponent data={data} params={params}/>
    </>
  );
};

export default Article;
