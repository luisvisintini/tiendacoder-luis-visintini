import { BsCart4 } from 'react-icons/bs'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { CarritoContext } from '../../../context/CartContext';
import { useContext } from 'react';



const CartWidget = () => {

  const { obtenerCantidad } = useContext(CarritoContext)
  const cantidadTotal = obtenerCantidad()

  const navigate = useNavigate()

  // const { carrito } = useCarrito()

  return (
    <Button variant="transparent" onClick={ ()=> navigate('/carrito')}>
      <BsCart4 size='20px' className='me-2 text-white'/>
      <Badge bg="primary">{cantidadTotal}</Badge>
    </Button>
    
  )
}

export default CartWidget