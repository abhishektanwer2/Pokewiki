import React from "react";
import { hot } from 'react-hot-loader';

import Header from "../src/compenents/header";
import Footer from "../src/compenents/footer";
import Banner from "./compenents/banner";

import "./App.css";

function App() {
  return (
    <div className="App bg-dark">
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}

export default hot(module)(App);
