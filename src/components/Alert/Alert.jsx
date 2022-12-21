import useCarrito from "../../hooks/useCarrito";


const Alert = () => {

    const { alert } = useCarrito()

  return (
    <div className="container mb-5">
        <div className="text-center">
            <div className="bg-danger text-white">
                {alert}
            </div>
        </div>
    </div>
  )
}

export default Alert