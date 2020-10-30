<<<<<<< HEAD
import React, { useState } from "react";
import { Card } from "reactstrap";
=======
import React from "react";
import { Card } from "reactstrap";
import React, { useState } from "react";
import { Card } from "reactstrap";
>>>>>>> updating

import "./style.css";

const HorizontalCards = (props) => {
<<<<<<< HEAD
  const { pokemons } = props;
  const IMAGE_URL = process.env.IMAGE_URL;
  if (pokemons.length > 0) {
=======
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

  if (data.length > 0) {
>>>>>>> updating
    return (
      <div className="cardsContainer py-3">
        {pokemons.map((pokemonData, index) => {
          const { url } = pokemonData.pokemon;
          return (
            <div key={index} className="pokemonCard">
              <Card className="box">
                <img
                  src={
                    IMAGE_URL +
                    url.split("/")[url.split("/").length - 2] +
                    ".png"
                  }
                  className="w-100"
                ></img>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
<<<<<<< HEAD
  return (
    <div>
      <p>Something went wrong</p>
    </div>
  );
};
=======
  return <div></div>;
};
const { pokemons } = props;
const IMAGE_URL = process.env.IMAGE_URL;
if (pokemons.length > 0) {
  return (
    <div className="cardsContainer py-3">
      {pokemons.map((pokemonData, index) => {
        const { url } = pokemonData.pokemon;
        return (
          <div key={index} className="pokemonCard">
            <Card className="box">
              <img
                src={
                  IMAGE_URL + url.split("/")[url.split("/").length - 2] + ".png"
                }
                className="w-100"
              ></img>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
return (
  <div>
    <p>Something went wrong</p>
  </div>
);
>>>>>>> updating

export default HorizontalCards;
