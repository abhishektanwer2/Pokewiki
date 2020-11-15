import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Pokedetails from "../src/compenents/pokedetails";
import HomePage from "./pages/homepage";

import "./App.css";
import "./styles/custom.css";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Switch>
          <Route path='/pokemon/:id' name='Pokemon Details' component={Pokedetails} />
          {/* <Route path='/pokemons' name='Pokemon Details' component={Pokedetails} /> */}
          <Route path='/' name='PokeWiki' component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default hot(module)(App);
