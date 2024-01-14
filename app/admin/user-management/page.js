import { redirect } from "next/navigation";
import checkIsAdmin from "@/middlewares/checkIsAdmin";
import UserManagementComponent from "./UserManagementComponent";

const UserManagement = () => {
  const isAdmin = checkIsAdmin();

  if (!isAdmin) {
    redirect("/");
  }

  return (
    <>
      <UserManagementComponent />
    </>
  );
};

export default UserManagement;
