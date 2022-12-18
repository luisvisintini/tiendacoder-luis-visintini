import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getLiquidosById } from "../../data/ListDB"
import LiquidoDetail from "../LiquidoDetail/LiquidoDetail"
import SpinnerKit from "../Spinner/SpinnerKit"

const LiquidoDetailContainer = () => {

    const [liquido, setLiquido] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()

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
    <div>
      <LiquidoDetail {...liquido} />
    </div>
  )
}

export default LiquidoDetailContainer