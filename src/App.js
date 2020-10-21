import React from "react";
import { hot } from 'react-hot-loader';

import Header from "../src/compenents/header/Header";
import Footer from "../src/compenents/footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <p>Hello World!</p>
      <Footer />
    </div>
  );
}

export default hot(module)(App);
