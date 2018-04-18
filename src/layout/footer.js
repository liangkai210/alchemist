import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

export default () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>Alchemist</Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem eventKey={2}>Dong</NavItem>
    </Nav>
  </Navbar>
);
