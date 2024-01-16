import { redirect } from 'next/navigation';
import checkAuth from "@/middlewares/checkAuth";
import checkIsAdmin from "@/middlewares/checkIsAdmin";
import ArticleManagementComponent from "./ArticleManagementComponent";
import Header from '@/app/Components/Header/Header';

const ArticleManagement = () => {
  const isConnected = checkAuth();
  const isAdmin = checkIsAdmin();

  if (!isAdmin) {
    redirect('/')
  }

  return (
    <>
      <Header isConnected={isConnected} isAdmin={isAdmin} />
      <ArticleManagementComponent />
    </>
  );
};

export default ArticleManagement;
