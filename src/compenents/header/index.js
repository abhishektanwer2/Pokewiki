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
  DropdownItem,
  InputGroup,
  Input,
  Button,
} from "reactstrap";
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [pokemontype, settype] = useState("");
  useEffect(() => {
    console.log(pokemontype);
    function handleStatusChange(status) {
      settype("water");
    }

  });
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

                  <Link to={'/pokewiki/type/water'}><DropdownItem>Water</DropdownItem></Link>
                  <Link to={'/pokewiki/type/fire'} ><DropdownItem>Fire</DropdownItem></Link>
                  <Link to={'/pokewiki/type/grass'}  ><DropdownItem>Grass</DropdownItem></Link>
                  <Link to={'/pokewiki/type/electric'}><DropdownItem>Electric</DropdownItem></Link>
                  <Link to={'/pokewiki/type/dragon'}><DropdownItem>Dragon</DropdownItem></Link>

                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </div>
          <div>
            <InputGroup>
              <Input></Input>
              <Button href="#" className="ml-2">
                Search
              </Button>
            </InputGroup>
          </div>
        </div>
      </Collapse>
    </Navbar >
  );
};

export default Header;
