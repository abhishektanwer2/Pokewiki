import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader } from 'reactstrap'
import axios from 'axios'

// import apiInstance from '../../api'

import Banner from '../../compenents/banner'
import HorizontalCards from '../../compenents/horizontalCards'
import Loader from '../../compenents/loader'
import SomethingWentWrongComponent from '../../compenents/somethingWentWrong'

function HomePage(props) {

  const [waterPokemons, setWaterPokemonsData] = useState([])
  const [firePokemons, setFirePokemonsData] = useState([])
  const [grassPokemons, setGrassPokemonsData] = useState([])
  const [electricPokemons, setElectricPokemonsData] = useState([])
  const [dragonPokemons, setDragonPokemonsData] = useState([])
  const [waterPokemonLoading, setWaterPokemonLoading] = useState(true)
  const [firePokemonLoading, setFirePokemonLoading] = useState(true)
  const [grassPokemonsLoading, setGrassPokemonsDataLoading] = useState([])
  const [electricPokemonsLoading, setElectricPokemonsDataLoading] = useState([])
  const [dragonPokemonsLoading, setDragonPokemonsDataLoading] = useState([])

  const getWaterPokemonsData = () => {
    setWaterPokemonLoading(true)
    console.log('env- ', process.env.REACT_APP_URL)
    axios.get(`${process.env.REACT_APP_URL}type/water`)
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
  const getGrassPokemonsData = () => {
    setGrassPokemonsDataLoading(true)
    apiInstance.get('/type/grass')
      .then((res) => {
        setGrassPokemonsData(res.data.pokemon)
      }).finally(() => setGrassPokemonsDataLoading(false))
  }
  const getElectricPokemonsData = () => {
    setElectricPokemonsDataLoading(true)
    apiInstance.get('/type/electric')
      .then((res) => {
        setElectricPokemonsData(res.data.pokemon)
      }).finally(() => setElectricPokemonsDataLoading(false))
  }
  const getDragonPokemonsData = () => {
    setDragonPokemonsDataLoading(true)
    apiInstance.get('/type/dragon')
      .then((res) => {
        setDragonPokemonsData(res.data.pokemon)
      }).finally(() => setDragonPokemonsDataLoading(false))
  }

  useEffect(() => {
    getWaterPokemonsData()
    // getFirePokemonsData()
    // getGrassPokemonsData()
    // getElectricPokemonsData()
    // getDragonPokemonsData()
  }, [])

  const LoaderComponent = () => <div><Loader /></div>

  const RenderPokemonsByType = ({ type, color, pokemons, loading, index }) => <Card className={`${index > 0 ? 'mt-3' : ''}`}>
    <CardHeader className='d-flex flex-row justify-content-between'>
      <h4 className='text-capitalize mb-0'>{type} Pokemons</h4>
      <Button color={color} tag={Link} to={`/pokewiki/type/${type}`} className='text-white'>View More</Button>
    </CardHeader>
    {
      loading ? <LoaderComponent /> : pokemons.length ? <CardBody className='p-2'>
        <HorizontalCards pokemons={pokemons.slice(0, 10)} />
      </CardBody> : <SomethingWentWrongComponent />
    }
  </Card>

  return <div>
    {/* <Banner /> */}
    <div className='p-3'>
      <RenderPokemonsByType type='water' color='info' pokemons={waterPokemons} loading={waterPokemonLoading} index={0} />
      {/* <RenderPokemonsByType type='fire' color='warning' pokemons={firePokemons} loading={firePokemonLoading} index={1} />
      <RenderPokemonsByType type='grass' color='success' pokemons={grassPokemons} loading={grassPokemonsLoading} index={2} />
      <RenderPokemonsByType type='electric' color='dark' pokemons={electricPokemons} loading={electricPokemonsLoading} index={3} />
      <RenderPokemonsByType type='dragon' color='danger' pokemons={dragonPokemons} loading={dragonPokemonsLoading} index={4} /> */}
    </div>
  </div>
}

export default HomePage