import React from "react";
import { hot } from 'react-hot-loader';

import Header from "../src/compenents/header";
import Banner from "./compenents/banner";
import Card from './compenents/card';
import HorizontalCards from './compenents/horizontalCards'
import Footer from "../src/compenents/footer";

import "./App.css";
import './styles/custom.css'

function App() {
  return (
    <div className="App bg-dark">
      <Header />
      <div>
        <Banner />
      </div>
      <div>
        <HorizontalCards />
      </div>
      <Footer />
    </div>
  );
}

export default hot(module)(App);
