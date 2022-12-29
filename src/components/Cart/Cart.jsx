import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCarrito from "../../hooks/useCarrito";
import SpinnerKit from "../Spinner/SpinnerKit";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const { carrito, quitarProducto, obtenerTotal, borrarTodo, carritoVacio } =
    useCarrito();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return <SpinnerKit />;
  }

  const total = obtenerTotal();

  if (carritoVacio) {
    return (
      <div>
        <h2 className="text-center mt-5 mb-5">No hay nada por aqui...</h2>
        <div className="text-center mt-5">
          <Link to="/" className="btn btn-primary w-25">
            Ir a inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-center mt-4 fw-bold mb-5">Carrito</h1>
      <div className="vh-50">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              {carrito.map((producto) => (
                <div className="card mb-4" key={producto.id}>
                  <div className="card-body p-4">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <img
                          src={producto.imagen}
                          className="img-fluid"
                          alt={producto.nombre}
                          width={100}
                        />
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Nombre</p>
                          <p className="lead fw-normal mb-0">
                            {producto.nombre}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <Button
                            className="btn btn-danger"
                            onClick={() => quitarProducto(producto.id)}
                          >
                            <FaTrashAlt />
                          </Button>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Cantidad</p>
                          <p className="lead fw-normal mb-0">
                            {producto.cantidad}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Precio</p>
                          <p className="lead fw-normal mb-0">
                            $ {producto.precio}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">SubTotal</p>
                          <p className="lead fw-normal mb-0">
                            ${producto.precio * producto.cantidad}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="card mb-5">
                <div className="card-body p-4">
                  <div className="float-end">
                    <p className="mb-0 me-5 d-flex align-items-center">
                      <span className="small text-muted me-2">
                        Total Orden:
                      </span>{" "}
                      <span className="lead fw-bold">$ {total}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center mb-5">
                <Button className="btn btn-danger" onClick={borrarTodo}>
                  Eliminar Todo
                </Button>
              </div>
              <div className="d-flex justify-content-end">
                <Link to="/" type="button" className="btn btn-dark btn-lg me-2">
                  Continuar Comprando
                </Link>
                <Link
                  to="/checkout"
                  type="button"
                  className="btn btn-success btn-lg"
                >
                  Finalizar Compra
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
