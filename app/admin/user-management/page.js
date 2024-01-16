import { redirect } from "next/navigation";
import checkAuth from "@/middlewares/checkAuth";
import checkIsAdmin from "@/middlewares/checkIsAdmin";
import UserManagementComponent from "./UserManagementComponent";
import Header from "@/app/Components/Header/Header";

const UserManagement = () => {
  const isConnected = checkAuth();
  const isAdmin = checkIsAdmin();

  if (!isAdmin) {
    redirect("/");
  }

  return (
    <>
      <Header isConnected={isConnected} isAdmin={isAdmin} />
      <UserManagementComponent />
    </>
  );
};

export default UserManagement;
