import React, { useState } from "react";
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

const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
        <div className='d-flex justify-content-between w-100'>
          <div>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">PokeWiki</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Pokemon</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Pokemon Type
              </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Water</DropdownItem>
                  <DropdownItem>Fire</DropdownItem>
                  <DropdownItem>Air</DropdownItem>
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
    </Navbar>
  );
};

export default Header;
