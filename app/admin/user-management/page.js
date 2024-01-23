import { redirect } from "next/navigation";
import checkAuth from "@/middlewares/checkAuth";
import checkIsAdmin from "@/middlewares/checkIsAdmin";
import UserManagementComponent from "./UserManagementComponent";
import Header from "@/app/Components/Header/Header";
import getToken from "@/middlewares/getToken";

const UserManagement = () => {
  const isConnected = checkAuth();
  const isAdmin = checkIsAdmin();

  const token = getToken();

  if (!isAdmin) {
    redirect("/");
  }

  return (
    <>
      <Header isConnected={isConnected} isAdmin={isAdmin} />
      <UserManagementComponent token={token}/>
    </>
  );
};

export default UserManagement;
