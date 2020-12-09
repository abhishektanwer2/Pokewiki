import React from 'react'
import { Row, Col, Badge } from "reactstrap"
import { Link } from "react-router-dom"

const PokeDetailsCard = (props) => {
  const { pokemonData, pokemonSpeciesData } = props

  const IMAGE_URL = process.env.REACT_APP_IMAGE_URL
  const colorBasedOnType = { water: 'info', fire: 'warning', bug: 'success', flying: 'dark', poison: 'primary', normal: 'secondary' }
  return <Row>
    <Col md={{ size: 4, offset: 1 }} sm={12} className='text-center'>
      <img src={IMAGE_URL + pokemonData.id + ".png"} />
    </Col>
    <Col md={7} sm={12}>
      <div className='m-3'>
        <h1 className='text-capitalize'>{pokemonData.name}</h1>
      </div>
      <div className="card-body">
        {
          pokemonData.types && pokemonData.types.length && <p>
            <b>Type: </b>
            {
              pokemonData.types && pokemonData.types.map((type, index) => <Link key={index} to={`/pokewiki/type/${type.type.name}`} className='custom-link'>
                <Badge
                  color='info' className={`px-2 py-1 text-uppercase text-white ${colorBasedOnType[type.type.name] ? `bg-${colorBasedOnType[type.type.name]}` : 'bg-info'} ${(index + 1) !== pokemonData.types.length && 'mr-2'}`}>{type.type.name}
                </Badge>
              </Link>)
            }
          </p>
        }
        {
          pokemonSpeciesData.color && <p>
            <b>Color: </b> <span className='text-capitalize'>{pokemonSpeciesData.color.name}</span>
          </p>
        }
        {
          pokemonData.height && <p>
            <b>Height: </b> {pokemonData.height / 10} m
    </p>
        }
        {
          pokemonData.weight && <p>
            <b>Weight: </b> {pokemonData.weight / 10} kg
    </p>
        }
        {
          pokemonData.abilities && <p>
            <b>Abilities:</b> <span> {pokemonData.abilities.map((ability) => (ability.ability.name)).join(', ')}</span>
          </p>
        }
      </div>
    </Col>
  </Row>
}

export default PokeDetailsCard