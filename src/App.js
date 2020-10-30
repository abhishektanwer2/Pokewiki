import React from "react";
import { hot } from "react-hot-loader";
import Hea

import HomePage from "./pages/homepage";
import Header from "../src/compenents/header";
import Banner from "./compenents/banner";
<<<<<<< HEAD
import Card from "./compenents/card";
=======
import Card from './compenents/card';
>>>>>>> updating
import Footer from "../src/compenents/footer";
import Pokedetails from "../src/compenents/pokedetails";

import "./App.css";
import "./styles/custom.css";

function App() {
  return (
    <div className="App bg-dark text-white">
<<<<<<< HEAD
      <Header />
      <Banner />
      <div>
        <Pokedetails />
      </div>
      <div>{/* <HorizontalCards /> */}</div>
      <Footer />
=======
      <Header></Header>
>>>>>>> updating
    </div>
  );
}

export default hot(module)(App);
