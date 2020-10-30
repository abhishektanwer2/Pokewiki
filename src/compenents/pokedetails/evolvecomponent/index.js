import React, { useState } from "react";
import { Row, Col, Card } from "reactstrap";

const Evolve = (props) => {
  const {
    data = [
      {
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      },
      {
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
    ],
  } = props;
  return (
    <Row className="box mx-auto bg-light">
      {data.map((pokemonData, index) => {
        return (
          <Col sm="4">
            <Card className="shadow">
              <img
                src={pokemonData.image}
                className="rounded-circle w-50 bg-secondary mx-auto p-3"
              />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Evolve;
