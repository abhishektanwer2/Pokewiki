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
  NavbarText,
  Row,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
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
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
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
          <InputGroup className="d-flex">
            <Input></Input>
            <Button href="#" className="ml-2">
              Search
            </Button>
          </InputGroup>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
