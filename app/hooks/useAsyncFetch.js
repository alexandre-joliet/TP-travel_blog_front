import { useEffect, useState } from "react";

export const useAsyncFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [myData, setMyData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    setError(undefined);

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        const data = await response.json();
        console.log(data);
        setMyData(data);
      } catch (error) {
        setError(error),
          console.error("Erreur lors de la récupération des données : ", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { isLoading, myData, error };
};
