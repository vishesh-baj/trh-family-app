import React from "react";
import Dashboard from "./Dashboard";
import ErrorPage from "./ErrorPage";
import LandingPage from "./LandingPage";
import UserDetails from "./UserDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { triggerDarkMode } from "../app/helpers";
import ProtectedRoute from "../routes/ProtectedRoute";
import Form from "../components/Form";
import LoginRoute from "../routes/loginRoute";

// * Layout for the application to specify what exactly need to be renderd in the app component

const Layout = ({ children }) => {
  const currentUser = useSelector((state) => state.selectedUser);
  const darkmode = useSelector((state) => state.darkmode);

  const { _id } = currentUser;

  // * Enable and disable dark mode
  triggerDarkMode(darkmode);

  return (
    <div>
      <Router>
        {children[0]}
        <Routes>
          <Route
            index
            path="/"
            element={
              <LoginRoute>
                <LandingPage />
              </LoginRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path={`/employee/${_id}`} element={<UserDetails />} />
          <Route path="/new-entry" element={<Form />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {children[1]}
      </Router>
    </div>
  );
};

export default Layout;
