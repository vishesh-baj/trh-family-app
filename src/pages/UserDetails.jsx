import React from "react";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const user = useSelector((state) => state.selectedUser);

  return (
    <React.Fragment>
      <div className="mt-20 container mx-auto">
        <h1 className="">FirstName:</h1>
        <h1>{user.first_name}</h1>
      </div>
      <h1>
        LastName: <span>{user.last_name}</span>
      </h1>
      <h1>
        Role: <span>{user.role}</span>
      </h1>
      <h1>
        Contact Number: <span>{user.contact_no}</span>
      </h1>
    </React.Fragment>
  );
};

export default UserDetails;
