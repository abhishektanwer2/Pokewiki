import React from "react";
import { hot } from "react-hot-loader";
import { Route } from 'react-router-dom'

import Header from './compenents/header'
import Footer from './compenents/footer'
import HomePage from "./pages/homepage";
import Pokedetails from "../src/compenents/pokedetails";

import "./App.css";
import "./styles/custom.css";

function App() {
  return (
    <div>
      <Header />
      <Route exact path='/' name='PokeWiki' component={HomePage} />
      <Route exact path='/pokemon/:id' name='Pokemon Details' component={Pokedetails} />
      {/* <Route path='/pokemons' name='Pokemon Details' component={Pokedetails} /> */}
      <Footer />
    </div>
  );
}

export default hot(module)(App);
