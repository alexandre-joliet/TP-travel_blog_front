import checkIsAdmin from "@/middlewares/checkIsAdmin";
import checkAuth from "@/middlewares/checkAuth";
import LoginComponent from "./LoginComponent";
import Header from "../Components/Header/Header";
import { redirect } from "next/navigation";

const Login = () => {
  const isConnected = checkAuth();
  const isAdmin = checkIsAdmin();

  if (isConnected) {
    redirect('/')
  }

  return (
    <>
      <Header isConnected={isConnected} isAdmin={isAdmin}/>
      <LoginComponent />
    </>
  );
};

export default Login;