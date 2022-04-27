import React from "react";
import { useSelector } from "react-redux";
import UserInfoCard from "../components/SubComponents/UserInfoCard";
const UserDetails = () => {
  const user = useSelector((state) => state.selectedUser);

  return (
    <React.Fragment>
      <div className="mt-20 flex align-middle justify-center w-screen h-screen bg-teal-50 dark:bg-gray-800">
        <UserInfoCard user={user} />
      </div>
    </React.Fragment>
  );
};

export default UserDetails;
