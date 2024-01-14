import { redirect } from 'next/navigation';
import checkIsAdmin from '@/middlewares/checkIsAdmin';
import CategoryManagementComponent from "./CategoryManagementComponent";

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
