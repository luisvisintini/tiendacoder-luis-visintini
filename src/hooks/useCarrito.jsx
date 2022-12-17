import { useContext } from "react";
import { CarritoContext } from "../context/CartContext";

const useCarrito = () => {
    return useContext(CarritoContext)
}

export default useCarrito