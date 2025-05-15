import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function MainNavbar() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#">MyStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">

            {/* Electronics */}
            <NavDropdown title="Electronics" id="electronics-dropdown">
              <NavDropdown.Item href="#">Phones</NavDropdown.Item>
              <NavDropdown.Item href="#">Laptops</NavDropdown.Item>
              <NavDropdown.Item href="#">TVs</NavDropdown.Item>
            </NavDropdown>

            {/* Fashion */}
            <NavDropdown title="Fashion" id="fashion-dropdown">
              <NavDropdown.Item href="#">Men</NavDropdown.Item>
              <NavDropdown.Item href="#">Women</NavDropdown.Item>
              <NavDropdown.Item href="#">Kids</NavDropdown.Item>
            </NavDropdown>

            {/* Other static menu items */}
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
