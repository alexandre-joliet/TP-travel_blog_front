import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import CategoryManagement from './test';
import parseJwt from '@/middlewares/parseToken';
import checkIsAdmin from '@/middlewares/checkIsAdmin';

const Page = async () => {
  
  const isAdmin = checkIsAdmin();

  if (!isAdmin) {
    redirect('/')
  }
  
  return (
    <>
      <h1>Test</h1>
        
      {/* <CategoryManagement /> */}
    </>
  )
}


export default Page;