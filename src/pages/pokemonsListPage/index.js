import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import { Link } from "react-router-dom"

import apiInstance from '../../api'

const PokemonList = (props) => {
  const [pokemons, setPokemonsData] = useState([])
  const [pokemonsType, setPokemonsType] = useState('')

  const getPokemonsData = () => {
    const { match } = props
    apiInstance.get(`/type/${match.params.name}/`).then((data) => {
      setPokemonsType(data.data.name)
      setPokemonsData(data.data.pokemon)
    })
  }

  useEffect(() => {
    getPokemonsData()
  }, [])

  const IMAGE_URL = process.env.IMAGE_URL
  return <div>
    {
      pokemons.length ? <div>
        <div className='text-center py-3'>
          <h2 className='text-capitalize'>{pokemonsType} Pokemons</h2>
        </div>
        <Row className='px-3'>
          {
            pokemons.map((pokemon, index) => {
              const { url } = pokemon.pokemon;
              const id = url.split("/")[url.split("/").length - 2]
              const name = pokemon.pokemon.name
              return <Col md={3} sm={12} key={index} className='mb-3'>
                <Card className="box shadow text-center">
                  <Link to={`/pokewiki/${name}`}>
                    <img src={IMAGE_URL + id + ".png"} className="w-100" />
                    <h4 className='mt-3'>{pokemon.pokemon.name}</h4>
                  </Link>
                </Card>
              </Col>
            })
          }
        </Row>
      </div> : <div>
          <p>Something went wrong...</p>
        </div>
    }
  </div>

}

export default PokemonList