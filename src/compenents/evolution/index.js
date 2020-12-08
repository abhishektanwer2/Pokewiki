import React, { useState, useEffect } from "react";
import { Row, Col, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import apiInstance from '../../api'
import './styles.css'

const Evolve = (props) => {

  const [evolutionChainData, setEvolutionChainData] = useState({})

  const getEvolutionChainData = () => {
    const { url } = props
    apiInstance.get(url).then(data => {
      setEvolutionChainData(data.data)
    })
  }

  useEffect(() => {
    getEvolutionChainData()
  }, [])

  const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;
  return (
    <CardBody>
      {evolutionChainData.chain &&
        <Row>
          <Col sm='4' className='text-center'>
            <div className='d-flex flex-row'>
              <div className='h-100'>
                <Link to={`/pokewiki/${evolutionChainData.chain.species.name}`}>
                  <div>
                    <img
                      src={IMAGE_URL + evolutionChainData.chain.species.url.split("/")[evolutionChainData.chain.species.url.split("/").length - 2] + ".png"}
                      className="rounded-circle w-50 bg-secondary mx-auto p-3"
                    />
                  </div>
                  <div className='mt-3'>
                    <h4>{evolutionChainData.chain.species.name}</h4>
                  </div>
                </Link>
              </div>
              <div className='align-self-center'>
                <FontAwesomeIcon icon={faArrowRight} size="3x" style={evolutionChainData.chain.evolves_to.length ? {} : { visibility: 'hidden' }} />
              </div>
            </div>
          </Col>
          {
            evolutionChainData.chain.evolves_to.length ? <Col sm='4' className='text-center'>
              <div className='d-flex flex-row'>
                <div>
                  <Link to={`/pokewiki/${evolutionChainData.chain.evolves_to[0].species.name}`}>
                    <div>
                      <img
                        src={IMAGE_URL + evolutionChainData.chain.evolves_to[0].species.url.split("/")[evolutionChainData.chain.evolves_to[0].species.url.split("/").length - 2] + ".png"}
                        className="rounded-circle w-50 bg-secondary mx-auto p-3"
                      />
                    </div>
                    <div className='mt-3'>
                      <h4>{evolutionChainData.chain.evolves_to[0].species.name}</h4>
                    </div>
                  </Link>
                </div>
                <div className='align-self-center'>
                  <FontAwesomeIcon icon={faArrowRight} size="3x" style={evolutionChainData.chain.evolves_to[0].evolves_to.length ? {} : { visibility: 'hidden' }} />
                </div>
              </div>
            </Col> : <Col>
                <p>This pokemon does not evolve.</p>
              </Col>
          }
          {
            (evolutionChainData.chain.evolves_to.length && evolutionChainData.chain.evolves_to[0].evolves_to.length) ? <Col sm='4' className='text-center'>
              <div className='d-flex flex-row'>
                <div>
                  <Link to={`/pokewiki/${evolutionChainData.chain.evolves_to[0].evolves_to[0].species.name}`}>
                    <div>
                      <img
                        src={IMAGE_URL + evolutionChainData.chain.evolves_to[0].evolves_to[0].species.url.split("/")[evolutionChainData.chain.evolves_to[0].evolves_to[0].species.url.split("/").length - 2] + ".png"}
                        className="rounded-circle w-50 bg-secondary mx-auto p-3"
                      />
                    </div>
                    <div className='mt-3'>
                      <h4>{evolutionChainData.chain.evolves_to[0].evolves_to[0].species.name}</h4>
                    </div>
                  </Link>
                </div>
                <div className='align-self-center'>
                  <FontAwesomeIcon icon={faArrowRight} size="3x" style={{ visibility: 'hidden' }} />
                </div>
              </div>
            </Col> : null
          }
        </Row>
      }
    </CardBody>
  );
};

export default Evolve;
