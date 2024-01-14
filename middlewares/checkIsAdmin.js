import { cookies } from 'next/headers'
import parseJwt from '@/middlewares/parseToken';

const checkIsAdmin = () => {
  
  const cookieStore = cookies();
  const token = cookieStore.get('token')

  let user;
  let isConnectedAdmin = false;
  
  if (token === undefined) {
    return isConnectedAdmin;
  } else {
    const value = parseJwt(token.value)
    user = value.userInfo;
    console.log(user);
  }

  if (user.label === 'Admin') {
    isConnectedAdmin = true;
    return isConnectedAdmin;
  } else {
    return isConnectedAdmin;
  }
}


export default checkIsAdmin;