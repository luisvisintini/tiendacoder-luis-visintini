import React from 'react'
import { BsCart4 } from 'react-icons/bs'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const CartWidget = () => {
  return (
    <Button variant="success">
      <BsCart4 size='20px' className='me-2'/>
      <Badge bg="secondary">9</Badge>
      
    </Button>
  )
}

export default CartWidget