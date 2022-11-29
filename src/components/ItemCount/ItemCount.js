import { useState } from "react"
import { BsCart4 } from "react-icons/bs"

const ItemCount = ({valorInicial, stockInicial, onAdd}) => {

    const [contador, setContador] = useState(valorInicial)

    const suma = ()=> {
        if(contador < stockInicial) {
            setContador( contador +1)
        } else {
            alert('no hay mas stock')
        }
    }

    const resta = ()=> {
        if (contador <= valorInicial ) {
            return
        }
        setContador(contador -1)
    }

    const reset = ()=> {
        setContador(valorInicial)
    }
    
    return (
        <div className="container text-center mt-5">
            <h1 className="text-5xl mb-10">Contador Clicks</h1>
            <h1 className="mb-10 text-3xl">{contador}</h1>
                <button 
                        onClick={()=> suma()} 
                        className="btn btn-primary me-2">+</button>
                <button 
                        onClick={()=> resta()} 
                        className="btn btn-primary me-2">-</button>
                <div className="mt-3">
                    <button 
                        onClick={()=> reset()} 
                        className="btn btn-danger mb-3">reset</button>
                </div>
                <div>
                    <button 
                        onClick={()=> onAdd(contador)}
                        className="btn btn-success">Agregar al <BsCart4/></button>
                </div>
                
        </div>

    )
    }

export default ItemCount