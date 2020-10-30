import React from "react";
import { hot } from "react-hot-loader";

import Header from "../src/compenents/header";
import Banner from "./compenents/banner";
import Footer from "../src/compenents/footer";
import Pokedetails from "../src/compenents/pokedetails";

import "./App.css";
import "./styles/custom.css";
import HomePage from "./pages/homepage";

function App() {
  return (
    <div className="App ">
      <Header />
      <Banner />
      <div>
        <HomePage></HomePage>
        {/* <Pokedetails /> */}
      </div>
      <div>{/* <HorizontalCards /> */}</div>
      <Footer />
    </div>
  );
}

export default hot(module)(App);
