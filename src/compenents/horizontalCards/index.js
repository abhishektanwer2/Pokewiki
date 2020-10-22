import React from 'react';
import { Card, Row, Col } from 'reactstrap';

import './style.css';

const HorizontalCards = (props) => {
  const { data = [{ image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png' },
  { image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
  { image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' },
  { image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png' },
  { image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
  { image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' }] } = props;

  if (data.length > 0) {
    return <div className='cardsContainer'>
      {
        data.map((pokemonData, index) => {
          return <div key={index} className='pokemonCard'>
            <Card className='box'>
              <img src={pokemonData.image} className='w-100'></img>
            </Card>
          </div>
        })
      }
    </div>
  }
  return <div></div>
}

export default HorizontalCards;