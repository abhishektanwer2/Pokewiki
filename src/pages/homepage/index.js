import React, { useEffect, useState } from 'react'

import apiInstance from '../../api'

import Banner from '../../compenents/banner'
import HorizontalCards from '../../compenents/horizontalCards'

function HomePage(props) {

  const [pokemons, setPokemonsData] = useState([])
  const [waterPokemons, setWaterPokemonsData] = useState([])
  const [firePokemons, setFirePokemonsData] = useState([])

  const getWaterPokemonsData = () => {
    apiInstance.get('/type/water')
      .then((res) => setWaterPokemonsData(res.data.pokemon))
  }
  const getFirePokemonsData = () => {
    apiInstance.get('/type/fire')
      .then((res) => setFirePokemonsData(res.data.pokemon))
  }

  useEffect(() => {
    getWaterPokemonsData()
    getFirePokemonsData()
  }, [])

  return <div>
    <Banner />
    {
      (waterPokemons || firePokemons) ? <div>
        {
          waterPokemons && <div className='m-3'>
            <h3>Water Pokemons</h3>
            <div>
              <HorizontalCards pokemons={waterPokemons.slice(0, 8)} />
            </div>
          </div>
        }
        {
          firePokemons && <div className='m-3'>
            <h3>Fire Pokemons</h3>
            <div>
              <HorizontalCards pokemons={firePokemons.slice(0, 8)} />
            </div>
          </div>
        }
      </div> : <div>
          <p>Something went wrong...</p>
        </div>
    }
  </div>
}

export default HomePage