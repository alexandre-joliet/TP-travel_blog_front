import { redirect } from 'next/navigation';
import checkAuth from "@/middlewares/checkAuth";
import checkIsAdmin from "@/middlewares/checkIsAdmin";
import ArticleManagementComponent from "./ArticleManagementComponent";
import Header from '@/app/Components/Header/Header';
import getToken from '@/middlewares/getToken';

const ArticleManagement = () => {
  const isConnected = checkAuth();
  const isAdmin = checkIsAdmin();

  const token = getToken();

  if (!isAdmin) {
    redirect('/')
  }

  return (
    <>
      <Header isConnected={isConnected} isAdmin={isAdmin} />
      <ArticleManagementComponent token={token}/>
    </>
  );
};

export default ArticleManagement;
