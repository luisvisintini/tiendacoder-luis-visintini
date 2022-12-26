import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import useCarrito from "../../hooks/useCarrito";
import Alert from "../Alert/Alert";
import {
  addDoc,
  collection,
  query,
  where,
  documentId,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { getDocs } from "firebase/firestore";
import { useState } from "react";
import SpinnerKit from "../Spinner/SpinnerKit";
import { useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const {
    carrito,
    obtenerTotal,
    datos,
    handleDatos,
    alert,
    setAlert,
    borrarTodo,
  } = useCarrito();

  const navigate = useNavigate();

  const MySwal = withReactContent(Swal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(datos).includes("")) {
      setAlert("Todos los campos son obligatorios");
      setTimeout(() => {
        setAlert("");
      }, 3000);
      return;
    }
    setAlert("");

    try {
      const objOrder = {
        datos: datos,
        items: carrito,
        total: obtenerTotal(),
      };

      const batch = writeBatch(db);
      const ids = carrito.map((prod) => prod.id);
      const productosRef = query(
        collection(db, "liquidos"),
        where(documentId(), "in", ids)
      );
      const productosAgregadosCarrito = await getDocs(productosRef);
      const { docs } = productosAgregadosCarrito;

      const sinStock = [];

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productoAgregadoCarrito = carrito.find(
          (prod) => prod.id === doc.id
        );
        const productoCantidad = productoAgregadoCarrito?.cantidad;

        if (stockDb >= productoCantidad) {
          batch.update(doc.ref, { stock: stockDb - productoCantidad });
        } else {
          sinStock.push({ id: doc.id, ...dataDoc });
        }
      });

      setLoading(true);

      if (sinStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders");
        const orderAgregada = await addDoc(orderRef, objOrder);

        MySwal.fire({
          title: "¡Compra Realizada!",
          text: `Número de orden: ${orderAgregada.id}`,
          icon: "success",
          footer: "Generando el detalle de la orden...",
          showConfirmButton: false,
        });

        borrarTodo();
        setTimeout(() => {
          Swal.close();
          navigate(`/order/${orderAgregada.id}`);
        }, 5000);
      } else {
        MySwal.fire({
          title: "¡Ups!",
          text: `No quedó stock de ese producto!`,
          icon: "error",
          footer:
            "Por favor, actualizá la página para ver el stock nuevamente.",
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <SpinnerKit />;
  }

  return (
    <>
      <div className="container">
        <h1 className="mt-5 text-center mb-5">Checkout</h1>
      </div>
      <div className="container">
        {alert && <Alert />}
        <Form>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              controlId="nombre"
              onChange={(e) => handleDatos(e)}
            >
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                placeholder="Ingresa tu nombre"
                name="nombre"
                defaultValue={datos.nombre}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="apellido"
              onChange={(e) => handleDatos(e)}
            >
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                placeholder="Apellido"
                name="apellido"
                defaultValue={datos.apellido}
              />
            </Form.Group>
          </Row>

          <Form.Group
            className="mb-3"
            controlId="direccion"
            onChange={(e) => handleDatos(e)}
          >
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              placeholder="Ej: Chacabuco 1234"
              name="direccion"
              defaultValue={datos.direccion}
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              className="mb-3"
              controlId="email"
              onChange={(e) => handleDatos(e)}
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ej: correo@correo.com"
                name="email"
                defaultValue={datos.email}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              className="mb-3"
              controlId="telefono"
              onChange={(e) => handleDatos(e)}
            >
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: 351999999"
                name="telefono"
                defaultValue={datos.telefono}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group
              as={Col}
              controlId="ciudad"
              onChange={(e) => handleDatos(e)}
            >
              <Form.Label>Ciudad</Form.Label>
              <Form.Control name="ciudad" defaultValue={datos.ciudad} />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="cod postal"
              onChange={(e) => handleDatos(e)}
            >
              <Form.Label>Cód.Postal</Form.Label>
              <Form.Control name="cp" defaultValue={datos.cp} />
            </Form.Group>
          </Row>
          <div className="text-center mt-5">
            <Button
              variant="primary"
              type="submit"
              className="w-50"
              onClick={handleSubmit}
            >
              Pagar
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Checkout;
