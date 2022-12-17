import { useContext} from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount"

const LiquidoDetail = ({id, marca, nombre, imagen, precio, descripcion, stock}) => {

    // const [cantidad, setCantidad] = useState(0)

    const { agregarItem, existeCarrito } = useContext(CarritoContext)


    const handleOnAdd = (cantidad)=> {

        agregarItem({ id, nombre, precio, cantidad })
        // setCantidad(cantidad)
      }
  return (
    <div className="container mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
                  <img src={imagen} alt={nombre} width={400} height={400}/>
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold">{nombre}</h3>
              <h4>{marca}</h4>
              <h4>${precio}</h4>
              <p>{descripcion}</p>
              <div className="action">
               { existeCarrito(id) ? <Link to='/carrito' className="btn btn-primary">Terminar</Link> : stock > 0 
                    ? <ItemCount stock={stock} onAdd={handleOnAdd}/> 
                    : <h2>No hay Stock</h2>
               }
              </div>
            </div>
          </div>
        </div>
	</div>
  )
}

export default LiquidoDetail