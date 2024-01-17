import checkAuth from "@/middlewares/checkAuth";
import checkIsAdmin from "@/middlewares/checkIsAdmin";
import Header from "./Components/Header/Header";
import HomeComponent from "./HomeComponent";

const Home = () => {
  const isConnected = checkAuth();
  const isAdmin = checkIsAdmin();

  return (
    <>
      <Header isConnected={isConnected} isAdmin={isAdmin} />
      <HomeComponent />
    </>
  );
};

export default Home;
