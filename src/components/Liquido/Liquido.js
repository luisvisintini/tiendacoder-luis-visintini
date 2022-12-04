import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


const Liquido = ({liquido}) => {

  const navigate = useNavigate()
  return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={liquido.imagen} />
            <Card.Body>
              <Card.Title>{liquido.nombre}</Card.Title>
              <Card.Text>{liquido.marca}</Card.Text>
              <Card.Text>{liquido.descripcion}</Card.Text>
              <Card.Text className='fw-bold fs-2'>${liquido.precio}</Card.Text>
              <Button onClick={()=> navigate(`/liquido/${liquido.id}`)} variant="primary">Ver Producto</Button>
            </Card.Body>
          </Card>
  )
}

export default Liquido