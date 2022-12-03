import { BsCart4 } from 'react-icons/bs'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


const CartWidget = () => {

  return (
    <Button variant="transparent">
      <BsCart4 size='20px' className='me-2 text-white'/>
      <Badge bg="primary">0</Badge>
    </Button>
    
  )
}

export default CartWidget