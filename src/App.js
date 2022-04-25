import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./app/store";

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          {/* Navbar */}
          <Navbar />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>

          <Footer />
          {/* Footer */}
        </Router>
      </Provider>
    </React.Fragment>
  );
};

export default App;
