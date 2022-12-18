import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';
import logo from '../../logoAdamssvg.svg'
import { useNavigate } from 'react-router-dom';


const Navigation = () => {
  const navigate = useNavigate()
  return (
    <>
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="/">
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
            <Nav.Link onClick={()=> navigate('/')}>Inicio</Nav.Link>
            <Nav.Link onClick={()=> navigate('/contacto')}>Contacto</Nav.Link>
              <Nav.Link onClick={()=> navigate('/marca/Mvh')}>MVH</Nav.Link>
              <Nav.Link onClick={()=> navigate('/marca/Shibumi')}>SHIBUMI</Nav.Link>
              <Nav.Link onClick={()=> navigate('/marca/HSBG')}>HSBG</Nav.Link>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container >
    </Navbar>
    
    </>
  )
}

export default Navigation