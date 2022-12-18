import { useState } from 'react';
import { createContext } from 'react';

export const CarritoContext = createContext()

export const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito ] = useState([])

    const agregarItem = (agregarProducto) => {
    if(!existeCarrito(agregarProducto.id)) {
        setCarrito([...carrito, agregarProducto])
    }
    }

    const existeCarrito = (id) => {
    return carrito.some(prodcuto => prodcuto.id === id)
    }

    const obtenerCantidad = () => {
    let acumulador = 0

    carrito.forEach( producto => {
        acumulador += producto.cantidad
    })
    return acumulador
    }

    const obtenerTotal = () => {
    let acumulador = 0

    carrito.forEach(producto => {
        acumulador += producto.cantidad * producto.precio
    })
    return acumulador
    }

    const quitarProducto = (id) => {
        const nuevoCarrito = carrito.filter(producto => producto.id !== id)

        setCarrito(nuevoCarrito)
    }

    console.log(carrito)

    return (
        
        <CarritoContext.Provider 
            value={{ 
                    carrito, 
                    agregarItem, 
                    existeCarrito, 
                    obtenerCantidad,
                    obtenerTotal,
                    quitarProducto
                }}>
                {children}
        </CarritoContext.Provider>
    )
}