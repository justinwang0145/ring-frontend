import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./navigation.css";

import "./navigation.css";

function NavigationBar() {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="#">
        <img
          src="https://i.ibb.co/vLrtTPB/logo.png"
          width="70"
          height="70"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/verification">
            Try Now
          </Nav.Link>
          <Nav.Link as={Link} to="/verification">
            Verification
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
