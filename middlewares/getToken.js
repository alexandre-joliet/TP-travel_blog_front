import { cookies } from 'next/headers'

const getToken = () => {
  
  const cookieStore = cookies();
  const token = cookieStore.get('userToken');

  if (token === undefined) {
    return null
  } else {
    return token.value;
  }
}

export default getToken;