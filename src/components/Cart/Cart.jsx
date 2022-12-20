import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import useCarrito from "../../hooks/useCarrito"

const Cart = () => {

  const { carrito, quitarProducto, obtenerTotal, borrarTodo, carritoVacio } = useCarrito()

  const total = obtenerTotal()

  if(carritoVacio) {
    return (
      <div>
        <h2 className="text-center mt-5 mb-5">No hay nada por aqui...</h2>
        <div className="text-center mt-5">
          <Link to="/" className="btn btn-primary w-25">
            Ir a inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <h1 className="text-center mt-4 fw-bold mb-5">Carrito</h1>
      { carrito.map(producto => {
          return (
            // TODO: CORREGIR CARDS 
            <div key={producto.id} className="container">
              <div className="d-flex">
                  <div className="col-4">
                    <div className="card">
                      <div className="card-body">
                        <img src={producto.imagen} alt={producto.nombre} width={100}/>
                        <h5>{producto.nombre}</h5>
                        <p>${producto.precio}</p>
                        <p>Cantidad: {producto.cantidad}</p>
                        <p>SubTotal: ${producto.precio * producto.cantidad}</p>
                        <Button className="btn btn-danger" onClick={() => quitarProducto(producto.id)}>Eliminar</Button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          )
        })
      }
      <div className="mt-5 text-center mb-5">
        <Button className="btn btn-danger" onClick={borrarTodo}>Eliminar Todo</Button>
      </div>
      <h1 className="text-center">Total: ${total}</h1>

      <div className="text-center mt-5 mb-5">
        <Link 
          to='/checkout' 
          className="btn btn-success w-25"
        >
          Realizar Pago
        </Link>
      </div>

      
    </>
  )
}

export default Cart