import { useEffect, useState } from "react";

export const useAsyncFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [myData, setMyData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    setError(undefined);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMyData(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }, [url]);
       
  return { isLoading, myData, error };
};
