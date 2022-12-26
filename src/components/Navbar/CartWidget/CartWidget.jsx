import { BsCart4 } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import useCarrito from "../../../hooks/useCarrito";

const CartWidget = () => {
  const { obtenerCantidad } = useCarrito();
  const cantidadTotal = obtenerCantidad();

  const navigate = useNavigate();

  // const { carrito } = useCarrito()

  return (
    <Button variant="transparent" onClick={() => navigate("/carrito")}>
      <BsCart4 size="20px" className="me-2 text-white" />
      <Badge bg="primary">{cantidadTotal}</Badge>
    </Button>
  );
};

export default CartWidget;
