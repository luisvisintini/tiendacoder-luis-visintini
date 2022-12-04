import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { getLiquidosById } from "../../data/ListDB"
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
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={liquido.imagen} />
      <Card.Body>
        <Card.Title>{liquido.nombre}</Card.Title>
        <Card.Text>{liquido.descripcion}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default LiquidoDetailContainer