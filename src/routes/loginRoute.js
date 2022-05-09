import React from "react";
import { Navigate, useLocation } from "react-router-dom";
const LoginRoute = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/dashboard" replace state={{ from: location }} />;
  }

  return children;
};

export default LoginRoute;
