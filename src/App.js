import React from "react";
import { hot } from "react-hot-loader";

import Header from "../src/compenents/header";
import Banner from "./compenents/banner";
import Pokedetails from "./compenents/pokedetails";
import HorizontalCards from "./compenents/horizontalCards";
import Footer from "../src/compenents/footer";

import "./App.css";
import "./styles/custom.css";

function App() {
  return (
    <div className="Apps">
      <Header />
      <div>
        {/* <Banner /> */}
        <Pokedetails></Pokedetails>
      </div>
      <div>{/* <HorizontalCards /> */}</div>
      <Footer />
    </div>
  );
}

export default hot(module)(App);
