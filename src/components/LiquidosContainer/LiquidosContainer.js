import { useState, useEffect } from "react"
import LiquidosList from "../LiquidosList/LiquidosList"
import { getLiquidos, getLiquidosByMarca } from "../../data/ListDB"
import { useParams } from "react-router-dom"

const LiquidosContainer = () => {

  const [liquidos, setLiquidos] = useState([])
  const { marcaId } = useParams()

  useEffect(() => {
    if(!marcaId) {
      getLiquidos()
        .then(response => {
          setLiquidos(response)
    })
      .catch(error => {
        console.log(error)
    })
    } else {
      getLiquidosByMarca(marcaId)
        .then(response => {
          setLiquidos(response)
      })
        .catch(error => {
          console.log(error)
      })
    }
    
  }, [marcaId])

  return (
    <div>
        <h1 className='text-center mt-5 fw-bold'>Nuestros Productos</h1>
        <LiquidosList liquidos={liquidos}/>
    </div>
  )
}

export default LiquidosContainer