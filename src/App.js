import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
