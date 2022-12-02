import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';
import logo from '../../logoAdamssvg.svg'


const Navigation = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="Adams Vape logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <NavDropdown title="Líquidos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#mvh">MVH</NavDropdown.Item>
              <NavDropdown.Item href="#shibumi">SHIBUMI</NavDropdown.Item>
              <NavDropdown.Item href="#hsbg">HSBG</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation