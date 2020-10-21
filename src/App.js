import React from "react";
import { Container } from "reactstrap";
import { hot } from 'react-hot-loader';

import Header from "../src/compenents/header/Header";
import Footer from "../src/compenents/footer/Footer";
import Banner from "./compenents/banner";

import "./App.css";

function App() {
  return (
    <Container fluid className="App bg-dark">
      <Header />
      <Banner />
      <Footer />
    </Container>
  );
}

export default hot(module)(App);
