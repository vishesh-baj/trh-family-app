import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import ErrorPage from "./ErrorPage";
import LandingPage from "./LandingPage";
import UserDetails from "./UserDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const currentUser = useSelector((state) => state.selectedUser);
  console.log(currentUser);

  const { id } = currentUser;

  return (
    <div>
      <Router>
        {children[0]}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/new-entry" element={<Form />} /> */}
          <Route path={`/user/${id}`} element={<UserDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {children[1]}
      </Router>
    </div>
  );
};

export default Layout;
