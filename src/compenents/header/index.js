import React, { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from 'react-router-dom';

import apiInstance from '../../api'
import SearchBarComponent from '../Searchbar';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pokemons, setPokemonsData] = useState([])
  const [pokemontype, settype] = useState("");

  const toggle = () => setIsOpen(!isOpen);

  const getPokemonsData = () => {
    apiInstance.get('/pokemon?limit=1200')
      .then((res) => setPokemonsData(res.data.results))
  }

  useEffect(() => {
    getPokemonsData()
  }, [])

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/underground/iron-ball.png"
          alt="..."
          className="rounded-circle"
        />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <div className="d-flex justify-content-between w-100">
          <div>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">PokeWiki</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Pokemon Type
                </DropdownToggle>
                <DropdownMenu right>

                  <Link to={'/pokewiki/type/water'} className='custom-link'><DropdownItem>Water</DropdownItem></Link>
                  <Link to={'/pokewiki/type/fire'} className='custom-link'><DropdownItem>Fire</DropdownItem></Link>
                  <Link to={'/pokewiki/type/grass'} className='custom-link' ><DropdownItem>Grass</DropdownItem></Link>
                  <Link to={'/pokewiki/type/electric'} className='custom-link'><DropdownItem>Electric</DropdownItem></Link>
                  <Link to={'/pokewiki/type/dragon'} className='custom-link'><DropdownItem>Dragon</DropdownItem></Link>

                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </div>
          <div>
            <SearchBarComponent pokemons={pokemons} history={props.history} />
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;
