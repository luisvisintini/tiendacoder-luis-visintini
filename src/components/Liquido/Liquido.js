import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Liquido = ({liquido}) => {
  return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./Images/liquido1.jpg" />
            <Card.Body>
              <Card.Title>{liquido.nombre}</Card.Title>
              <Card.Text>{liquido.marca}</Card.Text>
              <Card.Text>{liquido.descripcion}</Card.Text>
              <Card.Text>${liquido.precio}</Card.Text>
              <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
          </Card>
  )
}

export default Liquido