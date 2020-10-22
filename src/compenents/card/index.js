import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import '../../styles/custom.css'

const Card = (props) => {
  const {
    image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
    name = 'Pikachu',
    type = 'water',
    abilities = ['limber', 'imposter']
  } = props
  return (
    <div className='box'>
      <Row>
        <Col md={6} sm={12}>
          <img src={image} className='w-100' />
        </Col>
        <Col>
          <h4>
            <b>{name}</b>
          </h4>
          <p>
            <b>type: </b> {type}
          </p>
          <p>
            <b>abilities:</b>
            <ul>
              {abilities.map(ability => <li>{ability}</li>)}
            </ul>
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default Card;