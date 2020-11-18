import React, { useEffect, useState } from 'react'

import apiInstance from '../../api'

import Banner from '../../compenents/banner'
import HorizontalCards from '../../compenents/horizontalCards'
import Loader from '../../compenents/loader'
import SomethingWentWrongComponent from '../../compenents/somethingWentWrong'

function HomePage(props) {

  const [waterPokemonLoading, setWaterPokemonLoading] = useState(false)
  const [firePokemonLoading, setFirePokemonLoading] = useState(false)
  const [waterPokemons, setWaterPokemonsData] = useState([])
  const [firePokemons, setFirePokemonsData] = useState([])

  const getWaterPokemonsData = () => {
    setWaterPokemonLoading(true)
    apiInstance.get('/type/water')
      .then((res) => {
        setWaterPokemonsData(res.data.pokemon)
      }).finally(() => setWaterPokemonLoading(false))
  }
  const getFirePokemonsData = () => {
    setFirePokemonLoading(true)
    apiInstance.get('/type/fire')
      .then((res) => {
        setFirePokemonsData(res.data.pokemon)
      }).finally(() => setFirePokemonLoading(false))
  }

  useEffect(() => {
    getWaterPokemonsData()
    getFirePokemonsData()
  }, [])

  const LoaderComponent = () => <div><Loader /></div>

  return <div>
    <Banner />
    <div>
      <div className='m-3'>
        <h3>Water Pokemons</h3>
        {
          waterPokemonLoading ? <LoaderComponent /> : waterPokemons.length ? <div>
            <HorizontalCards pokemons={waterPokemons.slice(0, 8)} />
          </div> : <SomethingWentWrongComponent />
        }
      </div>
      <div className='m-3'>
        <h3>Fire Pokemons</h3>
        {
          firePokemonLoading ? <LoaderComponent /> : firePokemons.length ? <div>
            <HorizontalCards pokemons={firePokemons.slice(0, 8)} />
          </div> : <SomethingWentWrongComponent />
        }
      </div>
    </div>
  </div>
}

export default HomePage