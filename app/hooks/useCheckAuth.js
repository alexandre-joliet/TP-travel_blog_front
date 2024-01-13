import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// export const useCheckAuth = () => {
//   const [isConnected, setIsConnected] = useState(false);
//   const [userData, setUserData] = useState([]);

//   const router = useRouter();

//   // TODO: URL à adapter
//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/account", {
//           credentials: "include",
//           cache: "no-store",
//         });

//         if (!response.ok) {
//           console.log("Pas de user");
//           router.replace("/");

//           throw new Error(`Erreur HTTP ! statut : ${response.status}`);
//         }

//         const profileData = await response.json();

//         console.log(profileData);

//         setUserData(profileData);
//         setIsConnected(true);
//       } catch (error) {
//         console.error(
//           "Erreur lors de la récupération des données du profil : ",
//           error
//         );
//       }
//     };

//     fetchProfileData();
//   }, []);

//   return { isConnected, userData };
// };

export const useCheckAuth = async () => {
  const [isConnected, setIsConnected] = useState(false);
  const [userData, setUserData] = useState([]);

  const router = useRouter();

  // TODO: URL à adapter

      try {
        const response = await fetch("http://localhost:3000/account", {
          credentials: "include",
          cache: "no-store",
        });

        if (!response.ok) {
          console.log("Pas de user");
          router.replace("/");

          throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }

        const profileData = await response.json();

        console.log(profileData);

        setUserData(profileData);
        setIsConnected(true);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données du profil : ",
          error
        );
      }

  return { isConnected, userData };
};

