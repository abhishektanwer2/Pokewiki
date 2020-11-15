import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import apiInstance from '../../../api'

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

  const IMAGE_URL = process.env.IMAGE_URL;
  return (
    <Card className='box'>
      {evolutionChainData.chain &&
        <Row>
          <Col sm='4' className='text-center'>
            <div className='d-flex flex-row'>
              <div className='h-100'>
                <img
                  src={IMAGE_URL + evolutionChainData.chain.species.url.split("/")[evolutionChainData.chain.species.url.split("/").length - 2] + ".png"}
                  className="rounded-circle w-50 bg-secondary mx-auto p-3"
                />
                <div className='mt-3'>
                  <h4>{evolutionChainData.chain.species.name}</h4>
                </div>
              </div>
              <div className='align-self-center'>
                <FontAwesomeIcon icon={faArrowRight} size="3x" />
              </div>
            </div>
          </Col>
          {
            evolutionChainData.chain.evolves_to.length && <Col sm='4' className='text-center'>
              <div className='d-flex flex-row'>
                <div>
                  <img
                    src={IMAGE_URL + evolutionChainData.chain.evolves_to[0].species.url.split("/")[evolutionChainData.chain.evolves_to[0].species.url.split("/").length - 2] + ".png"}
                    className="rounded-circle w-50 bg-secondary mx-auto p-3"
                  />
                  <div className='mt-3'>
                    <h4>{evolutionChainData.chain.evolves_to[0].species.name}</h4>
                  </div>
                </div>
                <div className='align-self-center'>
                  <FontAwesomeIcon icon={faArrowRight} size="3x" />
                </div>
              </div>
            </Col>
          }
          {
            evolutionChainData.chain.evolves_to[0].evolves_to.length && <Col sm='4' className='text-center'>
              <div className='d-flex flex-row'>
                <div>
                  <img
                    src={IMAGE_URL + evolutionChainData.chain.evolves_to[0].evolves_to[0].species.url.split("/")[evolutionChainData.chain.evolves_to[0].evolves_to[0].species.url.split("/").length - 2] + ".png"}
                    className="rounded-circle w-50 bg-secondary mx-auto p-3"
                  />
                  <div className='mt-3'>
                    <h4>{evolutionChainData.chain.evolves_to[0].evolves_to[0].species.name}</h4>
                  </div>
                </div>
                <div className='align-self-center'>
                  <FontAwesomeIcon icon={faArrowRight} size="3x" style={{ visibility: 'hidden' }} />
                </div>
              </div>
            </Col>
          }
        </Row>
      }
    </Card>
  );
};

export default Evolve;
