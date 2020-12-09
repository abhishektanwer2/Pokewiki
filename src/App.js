import React from "react";
import { hot } from "react-hot-loader";
import { Route } from 'react-router-dom'

import Header from './compenents/header'
import Footer from './compenents/footer'
import HomePage from "./pages/homepage";
import Pokedetails from "./pages/pokeDetailsPage";
import PokemonList from './pages/pokemonsListPage'

import "./App.css";
import "./styles/custom.css";

function App(props) {
  return (
    <div>
      <Header history={props.history} />
      <div className='main-content-container'>
        <Route exact path='/' name='PokeWiki' component={HomePage} />
        <Route exact path='/pokewiki/:name' name='Pokemon Details' component={Pokedetails} />
        <Route exact path='/pokewiki/type/:name' name='Pokemons' component={PokemonList} />
      </div>
      <Footer />
    </div>
  );
}

export default hot(module)(App);
