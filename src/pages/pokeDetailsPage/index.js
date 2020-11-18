import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "reactstrap";

import apiInstance from '../../api'
import PokeDetailsCard from '../../compenents/pokeDetailsCard'
import Statsbar from '../../compenents/statsbar'
import Evolution from "../../compenents/evolution";
import HorizontalCards from "../../compenents/horizontalCards";
import Loader from '../../compenents/loader'
import SomethingWentWrongComponent from '../../compenents/somethingWentWrong'

import "../../styles/custom.css";

const Pokedetails = (props) => {

  const [pokemonData, setPokemonData] = useState({})
  const [pokemonSpeciesData, setpokemonSpeciesData] = useState({})
  const [pokemonDataLoading, setPokemonDataLoading] = useState(true)
  const [pokemonSpeciesDataLoading, setPokemonSpeciesDataLoading] = useState(true)

  const getPokemonData = () => {
    setPokemonDataLoading(true)
    const { match } = props
    const name = match.params.name
    apiInstance.get(`/pokemon/${name}/`).then((data) => setPokemonData(data.data)).finally(() => setPokemonDataLoading(false))
  }

  const getpokemonSpeciesData = () => {
    setPokemonSpeciesDataLoading(true)
    const { match } = props
    const name = match.params.name
    apiInstance.get(`/pokemon-species/${name}/`).then((data) => setpokemonSpeciesData(data.data)).finally(() => setPokemonSpeciesDataLoading(false))
  }

  useEffect(() => {
    getPokemonData()
    getpokemonSpeciesData()
  }, [props.match.params.name])

  const LoaderComponent = () => <div><Loader /></div>

  return (
    <div className="p-3">
      <Card className="shadow">
        {
          (pokemonDataLoading || pokemonSpeciesDataLoading) ? <LoaderComponent /> : pokemonData.name ? <PokeDetailsCard
            pokemonData={pokemonData} pokemonSpeciesData={pokemonSpeciesData} /> : <SomethingWentWrongComponent />
        }
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
        {
          pokemonDataLoading ? <LoaderComponent /> : pokemonData.stats ? <Col md="6" sm="12">
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
          </Col> : <SomethingWentWrongComponent />
        }
      </Row>
      <br></br>
      <h4>Evolutions</h4>
      {
        pokemonSpeciesDataLoading ? <LoaderComponent /> : pokemonSpeciesData.evolution_chain ?
          <Evolution url={pokemonSpeciesData.evolution_chain.url} /> : <SomethingWentWrongComponent />
      }
      <p>Similiar pokemon</p>
    </div>
  );
};

export default Pokedetails;
