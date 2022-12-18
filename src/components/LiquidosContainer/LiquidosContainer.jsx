import { useState, useEffect } from "react"
import LiquidosList from "../LiquidosList/LiquidosList"
import { getLiquidos, getLiquidosByMarca } from "../../data/ListDB"
import { useParams } from "react-router-dom"
import SpinnerKit from "../Spinner/SpinnerKit"

const LiquidosContainer = ( {greeting} ) => {

  const [liquidos, setLiquidos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
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
    .finally(() => {
      setIsLoading(false)
    })
    } else {
      getLiquidosByMarca(marcaId)
        .then(response => {
          setLiquidos(response)
      })
        .catch(error => {
          console.log(error)
      })
      .finally(()=> {
        setIsLoading(false)
      })
    }
    
  }, [marcaId])

  if (isLoading) {
    return <SpinnerKit/>
  }

  return (
    <div>
        <h1 className='text-center mt-5 fw-bold'>{greeting}</h1>
        <LiquidosList liquidos={liquidos}/>
    </div>
  )
}

export default LiquidosContainer