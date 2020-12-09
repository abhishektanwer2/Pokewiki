import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import { Link } from "react-router-dom"

import Loader from '../../compenents/loader'
import SomethingWentWrongComponent from '../../compenents/somethingWentWrong'

// import apiInstance from '../../api'

const PokemonList = (props) => {
  const [pokemonsData, setPokemonsData] = useState([])
  const [pokemonsType, setPokemonsType] = useState('')
  const [pokemonsDataLoading, setPokemonsDataLoading] = useState(true)

  const getPokemonsData = () => {
    setPokemonsDataLoading(true)
    const { match } = props
    apiInstance.get(`/type/${match.params.name}/`).then((data) => {
      setPokemonsType(data.data.name)
      setPokemonsData(data.data.pokemon)
    }).finally(() => setPokemonsDataLoading(false))
  }

  useEffect(() => {
    getPokemonsData()
  }, [props.match.params.name])

  const LoaderComponent = () => <div><Loader /></div>

  const IMAGE_URL = process.env.REACT_APP_IMAGE_URL
  return <div>
    {
      pokemonsDataLoading ? <LoaderComponent /> : pokemonsData.length ? <div>
        <div className='text-center py-3'>
          <h2 className='text-capitalize'>{pokemonsType} Pokemons</h2>
        </div>
        <Row className='px-3'>
          {
            pokemonsData.map((pokemon, index) => {
              const { url } = pokemon.pokemon;
              const id = url.split("/")[url.split("/").length - 2]
              const name = pokemon.pokemon.name
              return <Col md={3} sm={12} key={index} className='mb-3'>
                <Card className="box shadow text-center">
                  <Link to={`/pokewiki/${name}`}>
                    <div>
                      <img src={IMAGE_URL + id + ".png"} className="w-100" />
                    </div>
                    <div>
                      <h4 className='mt-3'>{pokemon.pokemon.name}</h4>
                    </div>
                  </Link>
                </Card>
              </Col>
            })
          }
        </Row>
      </div> : <SomethingWentWrongComponent />
    }
  </div>

}

export default PokemonList