import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const linkStyle = {
  backgroundColor: '#f0f0f0',   
  textAlign: 'center',
  padding: '10px 12px',
  margin: '0 4px',
  borderRadius: '4px',
  color: 'black',
  fontWeight: '500'
};

function MainNavbar() {
  return (
    <Navbar style={linkStyle} expand="lg" sticky="top"> 
      <Container>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" >
          <Nav className="me-auto">

            
            <NavDropdown title="Elektronik" id="electronics-dropdown" style={linkStyle}>
              <NavDropdown.Item href="#">Phones</NavDropdown.Item>
              <NavDropdown.Item href="#">Laptops</NavDropdown.Item>
              <NavDropdown.Item href="#">TVs</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Moda" id="fashion-dropdown" style={linkStyle}>
              <NavDropdown.Item href="#">Men</NavDropdown.Item>
              <NavDropdown.Item href="#">Women</NavDropdown.Item>
              <NavDropdown.Item href="#">Kids</NavDropdown.Item>
            </NavDropdown>

            
            <Nav.Link href="#" style={linkStyle}>Ev, Yaşam, Kırtasiye, Ofis</Nav.Link>
            <Nav.Link href="#" style={linkStyle}>Oto, Bahçe, Yapı Market</Nav.Link>
            <Nav.Link href="#" style={linkStyle}>Anne, Bebek, Oyuncak</Nav.Link>
            <Nav.Link href="#" style={linkStyle}>Spor, Outdoor</Nav.Link>
            <Nav.Link href="#" style={linkStyle}>Kozmetik, Kişisel Bakım</Nav.Link>
            <Nav.Link href="#" style={linkStyle}>Süpermarket, Pet Shop</Nav.Link>
            <Nav.Link href="#" style={linkStyle}>Kitap, Müzik, Film, Hobi</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
