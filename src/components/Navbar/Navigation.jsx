import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';
import logo from '../../logoAdamssvg.svg'
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { FaSearchPlus } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import { BsCheckLg } from 'react-icons/bs'

const Navigation = () => {
  const navigate = useNavigate()

    const [orderId, setOrderId] = useState([]);
    const [ordersId, setOrdersId] = useState([]);
  
    useEffect(() => {
      const collectionOrders = collection(db, "orders");
  
      getDocs(collectionOrders).then((response) => {
        const ordersId = response.docs.map((doc) => {
          return { id: doc.id };
        });
        setOrdersId(ordersId);
      });
    }, []);

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
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar orden"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setOrderId(e.target.value)}
            />
            {ordersId.some((item) => item.id === orderId ) ? (
              <Nav.Link onClick={()=> navigate(`/order/${orderId}`)}>
                <button className='btn btn-success text-white border-0'><BsCheckLg /></button>
              </Nav.Link>
            ): (
              <button className='btn btn-light bg-transparent text-white border-0'><FaSearchPlus /></button>
            )}
          </Form>
          <CartWidget/>
        </Navbar.Collapse>
      </Container >
    </Navbar>
    
    </>
  )
}

export default Navigation