import { cookies } from 'next/headers'
import parseJwt from '@/middlewares/parseToken';

const checkAuth = () => {
  
  const cookieStore = cookies();
  const token = cookieStore.get('token')

  let user;
  let isConnected = false;
  
  if (token === undefined) {
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