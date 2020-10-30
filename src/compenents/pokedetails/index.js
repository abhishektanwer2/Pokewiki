import React, { useState } from "react";
import { Row, Col, Card } from "reactstrap";
import "../../styles/custom.css";
import Evolve from "./evolvecomponent";
import HorizontalCards from "../horizontalCards";

const Pokedetails = (props) => {
  const {
    image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    name = "Pikachu",
    information = "Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the",
    type = "Water",
    abilities = ["limber", "imposter"],
  } = props;
  return (
    <div className="p-3">
      <Row>
        <Col md="6" sm="12">
          <Card className="shadow">
            <img src={image} className=" mx-auto d-block " />
          </Card>
        </Col>
        <hr />
        <Col md="6" sm="12">
          <Card className="shadow">
            <div className="card-header py-3">
              <h4 className="text-primary font-weight-bold m-0">{name}</h4>
            </div>
            <div className="card-body">
              <b>{information}</b>

              <p>
                <b>Type: </b> {type}
              </p>
              <p>
                <b>Abilities:</b>
                <ul className="list-group">
                  {abilities.map((ability) => (
                    <li className="list-group-item list-group-item-action list-group-item-light">
                      {ability}
                    </li>
                  ))}
                </ul>
                <b>Weakness:</b>
                <ul className="list-group">
                  {abilities.map((ability) => (
                    <li className="list-group-item list-group-item-action list-group-item-light">
                      {ability}
                    </li>
                  ))}
                </ul>
              </p>
            </div>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md="6" sm="12">
          <Card className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="text-primary font-weight-bold m-0">Moves</h6>
            </div>
            <div className="card-body">
              <h4 className="small font-weight-bold">
                Server migration<span className="float-right">20%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-danger"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "20%" }}
                >
                  <span className="sr-only">20%</span>
                </div>
              </div>
              <h4 className="small font-weight-bold">
                Sales tracking<span className="float-right">40%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-warning"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "40%" }}
                >
                  <span className="sr-only">40%</span>
                </div>
              </div>
              <h4 className="small font-weight-bold">
                Customer Database<span className="float-right">60%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-primary"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "60%" }}
                >
                  <span className="sr-only">60%</span>
                </div>
              </div>
              <h4 className="small font-weight-bold">
                Payout Details<span className="float-right">80%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-info"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                >
                  <span className="sr-only">80%</span>
                </div>
              </div>
              <h4 className="small font-weight-bold">
                Account setup<span className="float-right">Complete!</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-success"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "100%" }}
                >
                  <span className="sr-only">100%</span>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col md="6" sm="12">
          <Card className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="text-primary font-weight-bold m-0">Stats</h6>
            </div>
            <div className="card-body">
              <h4 className="small font-weight-bold">
                Server migration<span className="float-right">20%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-danger"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "20%" }}
                >
                  <span className="sr-only">20%</span>
                </div>
              </div>
              <h4 className="small font-weight-bold">
                Sales tracking<span className="float-right">40%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-warning"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "40%" }}
                >
                  <span className="sr-only">40%</span>
                </div>
              </div>
              <h4 className="small font-weight-bold">
                Customer Database<span className="float-right">60%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-primary"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "60%" }}
                >
                  <span className="sr-only">60%</span>
                </div>
              </div>
              <h4 className="small font-weight-bold">
                Payout Details<span className="float-right">80%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-info"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                >
                  <span className="sr-only">80%</span>
                </div>
              </div>
              <h4 className="small font-weight-bold">
                Account setup<span className="float-right">Complete!</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-success"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "100%" }}
                >
                  <span className="sr-only">100%</span>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <br></br>
      <p>Evolving Pokemon</p>
      <Evolve />
      <br></br>
      <p>Similiar pokemon</p>
    </div>
  );
};

export default Pokedetails;
