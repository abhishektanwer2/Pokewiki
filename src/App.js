import React from "react";
import { hot } from "react-hot-loader";

import HomePage from "./pages/homepage";
import Header from "../src/compenents/header";
import Banner from "./compenents/banner";
import Card from "./compenents/card";
import Footer from "../src/compenents/footer";
import Pokedetails from "../src/compenents/pokedetails";

import "./App.css";
import "./styles/custom.css";

function App() {
  return (
    <div className="App bg-dark text-white">
      <Header />
      <Banner />
      <div>
        <Pokedetails />
      </div>
      <div>{/* <HorizontalCards /> */}</div>
      <Footer />
    </div>
  );
}

export default hot(module)(App);
