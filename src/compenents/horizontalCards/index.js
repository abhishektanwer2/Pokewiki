import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";

import "./style.css";

const HorizontalCards = (props) => {
  const { pokemons } = props;
  const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;
  return <div className="cardsContainer py-2">
    {
      pokemons.map((pokemonData, index) => {
        const { url } = pokemonData.pokemon;
        const id = url.split("/")[url.split("/").length - 2]
        const name = pokemonData.pokemon.name
        return (
          <div key={index} className="pokemonCard">
            <Card className="box">
              <Link to={`/pokewiki/${name}`}>
                <div>
                  <img src={IMAGE_URL + id + ".png"} className="w-100" />
                </div>
                <h5 className='mt-3 mb-0 text-center'>{name}</h5>
              </Link>
            </Card>
          </div>
        );
      })}
  </div>
};

export default HorizontalCards;
