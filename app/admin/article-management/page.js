import { redirect } from 'next/navigation';
import checkIsAdmin from '@/middlewares/checkIsAdmin';
import ArticleManagementComponent from "./ArticleManagementComponent";

const ArticleManagement = () => {
  const isAdmin = checkIsAdmin();

  if (!isAdmin) {
    redirect('/')
  }

  return (
    <>
      <ArticleManagementComponent />
    </>
  );
};

export default ArticleManagement;
