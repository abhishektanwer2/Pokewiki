import React, { useState, useEffect } from "react";
import { Row, Col, Card, Badge } from "reactstrap";
import { Link } from "react-router-dom";

import apiInstance from '../../api'
import Evolution from "../../compenents/evolution";
import Statsbar from '../../compenents/statsbar'
import HorizontalCards from "../../compenents/horizontalCards";

import "../../styles/custom.css";

const Pokedetails = (props) => {

  const [pokemonData, setPokemonData] = useState({})
  const [pokemonSpeciesData, setpokemonSpeciesData] = useState({})

  const getPokemonData = () => {
    const { match } = props
    const name = match.params.name
    apiInstance.get(`/pokemon/${name}/`).then((data) => setPokemonData(data.data))
  }

  const getpokemonSpeciesData = () => {
    const { match } = props
    const name = match.params.name
    apiInstance.get(`/pokemon-species/${name}/`).then((data) => setpokemonSpeciesData(data.data))
  }

  useEffect(() => {
    getPokemonData()
    getpokemonSpeciesData()
  }, [props.match.params.name])

  const IMAGE_URL = process.env.IMAGE_URL
  const colorBasedOnType = { water: 'info', fire: 'warning', bug: 'success', flying: 'dark', poison: 'primary', normal: 'secondary' }
  return (
    <div className="p-3">
      <Card className="shadow">
        <Row>
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
                    pokemonData.types && pokemonData.types.map((type, index) => <Link key={index} to={`/pokewiki/type/${type.type.name}`}>
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
      </Card>
      <br />
      <Row>
        <Col md="6" sm="12">
          <Card className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="text-primary font-weight-bold m-0">Moves</h6>
            </div>
            <div className="card-body">
              {/* {
                pokemonData.moves && pokemonData.moves.slice(0,8).map((move, index) => <div key={index}>
                  <h4 className="small font-weight-bold">
                    {move.stat.name}<span className="float-right">{`${stats.base_stat}`}</span>
                  </h4>
                  <Progressbar stats={stats} />
                </div>)
              } */}
            </div>
          </Card>
        </Col>
        <Col md="6" sm="12">
          <Card className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="text-primary font-weight-bold m-0">Stats</h6>
            </div>
            <div className="card-body">
              {
                pokemonData.stats && pokemonData.stats.sort((a, b) => a.base_stat > b.base_stat ? 1 : -1).map((stat, index) => <div key={index}>
                  <h4 className="small font-weight-bold">
                    {stat.stat.name}<span className="float-right">{`${stat.base_stat}`}</span>
                  </h4>
                  <Statsbar stat={stat} />
                </div>)
              }
            </div>
          </Card>
        </Col>
      </Row>
      <br></br>
      <h4>Evolutions</h4>
      {
        pokemonSpeciesData.evolution_chain && <Evolution url={pokemonSpeciesData.evolution_chain.url} />
      }
      <p>Similiar pokemon</p>
    </div>
  );
};

export default Pokedetails;
