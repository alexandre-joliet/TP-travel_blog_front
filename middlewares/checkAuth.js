import { cookies } from 'next/headers'
import parseJwt from '@/middlewares/parseToken';

const checkAuth = () => {
 
  const cookieStore = cookies();  
  const token = cookieStore.get('userToken')
  // console.log('Token:', token);

  let user;
  let isConnected = false;
  
  if (token === undefined || token.value === '') {
    return isConnected;
  } else {
    const value = parseJwt(token.value)
    user = value.userInfo;
    // console.log(user)

    isConnected = true;
    return isConnected;
  }
}


export default checkAuth;