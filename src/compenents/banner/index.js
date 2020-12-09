import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';

import Loader from '../loader'
// import apiInstance from '../../api'

import './banner.css'

const Banner = (props) => {
  const generateRandomPokeId = () => {
    const number = Math.floor(Math.random() * 800);
    return number;
  }

  const [randomPokeData, setRandomPokeData] = useState([{ id: generateRandomPokeId() }, { id: generateRandomPokeId() }, { id: generateRandomPokeId() }])

  const getPokeName = async (pokeId, index) => {
    await apiInstance.get(`/pokemon/${pokeId}`).then((data) => {
      const pokeData = [...randomPokeData]
      pokeData[index].name = data.data.name
      setRandomPokeData(pokeData)
    })
  }

  const getRandomPokeNames = () => {
    randomPokeData.map((poke, index) => getPokeName(poke.id, index))
  }

  useEffect(() => {
    console.log('banner')
    getRandomPokeNames()
  }, [])

  const LoaderComponent = () => <div><Loader /></div>

  if (randomPokeData.length) {
    return (
      <div className='bannerContainer'>
        <Carousel className="text-center" showThumbs={false}>
          {
            randomPokeData.map((pokemon, index) => <div key={index}>
              <Link to={`/pokewiki/${pokemon.name}`}>
                <div>
                  <img src={`${process.env.REACT_APP_IMAGE_URL}` + pokemon.id + '.png'} alt={pokemon.name} />
                </div>
              </Link>
            </div>)
          }
        </Carousel>
      </div>
    );
  }
  return <LoaderComponent />
};

export default Banner;
