import { useContext } from "react"
import { Button } from "react-bootstrap"
import { CarritoContext } from "../../context/CartContext"


const Cart = () => {

  const { carrito, quitarProducto, obtenerTotal } = useContext(CarritoContext)

  const total = obtenerTotal()

  return (
    <div className="text-center">
        <h1 className="text-center mt-4">Carrito</h1>
        {
          carrito.map(producto => {
            return (
              <div key={producto.id}>
                <h1>{producto.nombre}</h1>
                <h2>${producto.precio}</h2>
                <h2>Cantidad: {producto.cantidad}</h2>
                <h2>SubTotal: ${producto.precio * producto.cantidad}</h2>
                <Button className="btn btn-danger" onClick={() => quitarProducto(producto.id)}>Eliminar Producto</Button>
              </div>
            )
          })
        }
        <h1>Total: ${total}</h1>
    </div>
  )
}

export default Cart