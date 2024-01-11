import { useEffect, useState } from "react";

export const useCheckAuth = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch("http://localhost:3000/account", {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }

        const profileData = await response.json();

        setUserData(profileData);
        setIsConnected(true);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données du profil : ",
          error
        );
      }
    };

    fetchProfileData();
  }, []);

  return { isConnected, userData };
};
