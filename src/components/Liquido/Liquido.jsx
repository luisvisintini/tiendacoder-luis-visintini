import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./liquido.css";

const Liquido = ({ liquido }) => {
  const navigate = useNavigate();
  return (
    <Card className="border-0 item" style={{ width: "18rem" }}>
      {liquido.stock === 0 ? (
        <span className="notify-badge-soldout">Agotado</span>
      ) : (
        <span className="notify-badge">{`Stock: ${liquido.stock}`}</span>
      )}
      <Card.Img variant="top" src={liquido.imagen} />
      <Card.Body>
        <Card.Title className="fw-bold">{liquido.nombre}</Card.Title>
        <Card.Text>{liquido.marca}</Card.Text>
        <Card.Text>{liquido.descripcion.slice(0, 20)}...</Card.Text>
        <Card.Text className="fw-bold fs-2">${liquido.precio}</Card.Text>
        <Button
          onClick={() => navigate(`/liquido/${liquido.id}`)}
          variant="primary"
        >
          Ver Producto
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Liquido;
