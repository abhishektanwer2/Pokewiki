import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";

import "./style.css";

const HorizontalCards = (props) => {
  const { pokemons } = props;
  const IMAGE_URL = process.env.IMAGE_URL;
  return <div className="cardsContainer py-3">
    {
      pokemons.map((pokemonData, index) => {
        const { url } = pokemonData.pokemon;
        const id = url.split("/")[url.split("/").length - 2]
        const name = pokemonData.pokemon.name
        return (
          <div key={index} className="pokemonCard">
            <Card className="box shadow">
              <Link to={`/pokewiki/${name}`}>
                <img src={IMAGE_URL + id + ".png"} className="w-100" />
              </Link>
            </Card>
          </div>
        );
      })}
  </div>
};

export default HorizontalCards;
