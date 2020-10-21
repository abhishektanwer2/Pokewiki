import React from "react";
import "./App.css";
import Header from "../src/compenents/header/Header";
import Footer from "../src/compenents/footer/Footer";
import { Container } from "reactstrap";
import Banner from "./compenents/banner";

function App() {
  return (
    <Container fluid className="App bg-dark">
      <Header />
      <Banner />
      <Footer />
    </Container>
  );
}

export default App;
