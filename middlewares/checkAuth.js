import { cookies } from 'next/headers'
import parseJwt from '@/middlewares/parseToken';

const checkAuth = () => {
 
  const cookieStore = cookies();
  // console.log('CookieStore:', cookieStore);
  
  // const token = cookieStore.get('token')
  // console.log('Token:',token);

  const token = cookieStore.get('userToken')


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
    
  // try {
  //   let isConnected = false;

  //   const response = await fetch('http://localhost:3000/account', {
  //     credentials: "include",
  //   })

  //   const data = await response.json();
  //   console.log('Réponse fetch :', data);
  //   return isConnected;

  // } catch (error) {
  //   console.log(error)
  // }
}


export default checkAuth;