import React from "react";
import Dashboard from "./Dashboard";
import ErrorPage from "./ErrorPage";
import LandingPage from "./LandingPage";
import UserDetails from "./UserDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { triggerDarkMode } from "../app/helpers";
import ProtectedRoute from "../routes/ProtectedRoute";
<<<<<<< HEAD
import AddEmployee from "./AddEmployee";
// ? Layout for the application to specify what exacly need to be renderd in the app component
=======
>>>>>>> parent of 6bb3752 (added routing for logout fixed issue)

const Layout = ({ children }) => {
  const currentUser = useSelector((state) => state.selectedUser);
  const darkmode = useSelector((state) => state.darkmode);
<<<<<<< HEAD
=======
  const user = localStorage.getItem("user");
>>>>>>> parent of 6bb3752 (added routing for logout fixed issue)

  // * For specific user route
  const { id } = currentUser;

  // * Enable and disable dark mode
  triggerDarkMode(darkmode);

  return (
    <div>
      <Router>
        {children[0]}
        <Routes>
          <Route index path="/" element={<LandingPage />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* <Route path="/new-entry" element={<Form />} /> */}
          <Route
            path={`/user/${id}`}
            element={
              <ProtectedRoute>
                <UserDetails />
              </ProtectedRoute>
            }
          />
<<<<<<< HEAD

          <Route path="/add-employee" element={<AddEmployee />} />

=======
>>>>>>> parent of 6bb3752 (added routing for logout fixed issue)
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {children[1]}
      </Router>
    </div>
  );
};

export default Layout;
