import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getLiquidosById } from "../../data/ListDB"
import ItemCount from "../ItemCount/ItemCount"
import SpinnerKit from "../Spinner/SpinnerKit"

const LiquidoDetailContainer = () => {

    const [liquido, setLiquido] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()

    const handleOnAdd = (cantidad)=> {
      if (cantidad > 0 ) {
        alert(`agregaste ${cantidad} articulos al carrito`)
        return
      } else {
        alert('debes agregar al menos 1 articulo')
      }
    }

    useEffect(() => {
        getLiquidosById(params.liquidoId)
        .then(response => {
            setLiquido(response)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(()=> {
            setIsLoading(false)
        })   
    }, [params.liquidoId])

    if(isLoading) {
        return <SpinnerKit/>
    }
    
  return (
    <div className="container mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
                  <img src={liquido.imagen} alt={liquido.nombre} width={400} height={400}/>
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold">{liquido.nombre}</h3>
              <h4>{liquido.marca}</h4>
              <h4>${liquido.precio}</h4>
              <p>{liquido.descripcion}</p>
              <div className="action">
                <ItemCount  valorInicial={0}
                            stockInicial={5}
                            onAdd={handleOnAdd}/>
              </div>
            </div>
          </div>
        </div>
	</div>
  )
}

export default LiquidoDetailContainer