import { useState, useEffect } from "react"
import LiquidoCard from "../LiquidoCard/LiquidoCard"
import { getLiquidos } from "../../data/ListDB"



const LiquidosContainer = () => {

  const [liquidos, setLiquidos] = useState([])

  useEffect(() => {
    getLiquidos()
    .then(response => {
      setLiquidos(response)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div>
        <h1 className='text-center mt-5 fw-bold'>Nuestros Productos</h1>
        <LiquidoCard liquidos={liquidos}/>
    </div>
  )
}

export default LiquidosContainer