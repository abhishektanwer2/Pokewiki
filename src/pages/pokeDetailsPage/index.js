import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";

import apiInstance from '../../api';
import PokeDetailsCard from '../../compenents/pokeDetailsCard';
import Statsbar from '../../compenents/statsbar';
import Evolution from "../../compenents/evolution";
import HorizontalCards from "../../compenents/horizontalCards";
import Loader from '../../compenents/loader'
import SomethingWentWrongComponent from '../../compenents/somethingWentWrong';

import "../../styles/custom.css";

const Pokedetails = (props) => {

  const [pokemonData, setPokemonData] = useState({})
  const [pokemonSpeciesData, setpokemonSpeciesData] = useState({})
  const [similarPokemonsData, setSimilarPokemonsData] = useState([])
  const [pokemonDataLoading, setPokemonDataLoading] = useState(true)
  const [pokemonSpeciesDataLoading, setPokemonSpeciesDataLoading] = useState(true)
  const [similarPokemonsDataLoading, setSimilarPokemonsDataLoading] = useState(true)

  const getPokemonData = () => {
    setPokemonDataLoading(true)
    const { match } = props
    const name = match.params.name
    apiInstance.get(`/pokemon/${name}/`).then((data) => {
      setPokemonData(data.data);
      getSimilarPokemonsData(data.data.types[0].type.name);
      getpokemonSpeciesData(data.data.species.name);
    }).finally(() => setPokemonDataLoading(false));
  }

  const getpokemonSpeciesData = (name) => {
    setPokemonSpeciesDataLoading(true);
    apiInstance.get(`/pokemon-species/${name}/`).then((data) => setpokemonSpeciesData(data.data)).finally(() => setPokemonSpeciesDataLoading(false));
  }

  const getSimilarPokemonsData = (type) => {
    setSimilarPokemonsDataLoading(true)
    apiInstance.get(`/type/${type}`).then((data) => setSimilarPokemonsData(data.data.pokemon)).finally(() => setSimilarPokemonsDataLoading(false));
  }

  useEffect(() => {
    getPokemonData()
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
      <Row className='mt-3'>
        <Col md="6" sm="12">
          <Card className="shadow">
            <CardHeader className="font-weight-bold">Moves</CardHeader>
            <CardBody>
              {/* {
                pokemonData.moves && pokemonData.moves.slice(0,8).map((move, index) => <div key={index}>
                  <h4 className="small font-weight-bold">
                    {move.stat.name}<span className="float-right">{`${stats.base_stat}`}</span>
                  </h4>
                  <Progressbar stats={stats} />
                </div>)
              } */}
            </CardBody>
          </Card>
        </Col>
        <Col md="6" sm="12">
          <Card className="shadow">
            <CardHeader className="font-weight-bold">Stats</CardHeader>
            <CardBody>
              {
                pokemonDataLoading ? <LoaderComponent /> : pokemonData.stats ? pokemonData.stats.sort((a, b) => a.base_stat > b.base_stat ? 1 : -1).map((stat, index) => <div key={index}>
                  <h4 className="small font-weight-bold">
                    {stat.stat.name}<span className="float-right">{`${stat.base_stat}`}</span>
                  </h4>
                  <Statsbar stat={stat} />
                </div>) : <SomethingWentWrongComponent />
              }
            </CardBody>
          </Card>
        </Col>
      </Row>
      <div className='mt-3'>
        <Card className='shadow'>
          <CardHeader className='font-weight-bold'>Evolutions</CardHeader>
          {
            pokemonSpeciesDataLoading ? <LoaderComponent /> : pokemonSpeciesData.evolution_chain ?
              <Evolution url={pokemonSpeciesData.evolution_chain.url} /> : <SomethingWentWrongComponent />
          }
        </Card>
      </div>
      {
        pokemonData.types ? <div className='mt-3'>
          <Card className='shadow'>
            <CardHeader className='font-weight-bold'>Similar Pokemons</CardHeader>
            {
              similarPokemonsDataLoading ? <LoaderComponent /> : similarPokemonsData.length ? <CardBody className='p-2'>
                <HorizontalCards pokemons={similarPokemonsData.slice(0, 8)} />
              </CardBody> : <SomethingWentWrongComponent />
            }
          </Card>
        </div> : null
      }
    </div>
  );
};

export default Pokedetails;
