import React, { useState } from "react";
import { useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import { Link } from "react-router-dom";

import Loader from '../loader'
import apiInstance from '../../api'

import './banner.css'

const Banner = (props) => {
  const generateRandomPokeId = () => {
    const number = Math.floor(Math.random() * 800);
    return number;
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
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
    getRandomPokeNames()
  }, [])

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === randomPokeData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? randomPokeData.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = randomPokeData.length ? randomPokeData.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <Link to={`/pokewiki/${item.name}`}>
          <div>
            <img src={`${process.env.IMAGE_URL}/` + item.id + '.png'} alt={item.altText} />
          </div>
        </Link>
      </CarouselItem>
    );
  }) : [];

  const LoaderComponent = () => <div><Loader /></div>

  if (randomPokeData.length) {
    return (
      <div className='bannerContainer'>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          className="text-center"
        >
          <CarouselIndicators
            items={randomPokeData}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
    );
  }
  return <LoaderComponent />
};

export default Banner;
