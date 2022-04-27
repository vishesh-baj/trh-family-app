import React, { useState } from "react";
import Dashboard from "./Dashboard";
import ErrorPage from "./ErrorPage";
import LandingPage from "./LandingPage";
import UserDetails from "./UserDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "../routes/ProtectedRoute";

// Layout for the application to specify what exacly need to be renderd in the app component

const Layout = ({ children }) => {
  const currentUser = useSelector((state) => state.selectedUser);
  const darkmode = useSelector((state) => state.darkmode);
  const user = JSON.parse(localStorage.getItem("user"));

  const { id } = currentUser;

  if (darkmode === true) {
    document.body.classList.add("dark");
  }
  if (darkmode === false) {
    document.body.classList.remove("dark");
  }

  return (
    <div>
      <Router>
        {children[0]}
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path={`user/:${id}`}
            element={
              <ProtectedRoute user={user}>
                <UserDetails />
              </ProtectedRoute>
            }
          />

          {/* <Route path="/new-entry" element={<Form />} /> */}

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {children[1]}
      </Router>
    </div>
  );
};

export default Layout;
