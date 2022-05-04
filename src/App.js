import React from "react";
import store from "./app/store";
import Layout from "./pages/Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Layout>
          <Navbar />
          <Footer />
        </Layout>
      </Provider>
    </React.Fragment>
  );
};

export default App;
