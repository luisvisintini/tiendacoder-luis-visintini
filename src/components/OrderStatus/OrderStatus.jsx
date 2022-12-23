import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import SpinnerKit from "../Spinner/SpinnerKit";

const OrderStatus = () => {
  const { orderId } = useParams();

  const [orderData, setOrderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const order = doc(db, "orders", orderId);

    getDoc(order)
      .then((response) => {
        const data = response.data();
        setOrderData(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [orderId]);

  const { datos, items, total } = orderData;

  if (isLoading) {
    return <SpinnerKit />;
  }

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-5">Resumen de tu Pedido</h1>
        <h3>Numero de Orden: {orderId}</h3>
        <h3>
          Cliente: {datos.nombre} {datos.apellido}
        </h3>
        <h3>Dirección: {datos.direccion}</h3>
        <h3>Email: {datos.email}</h3>
        <h3>Telefono: {datos.telefono}</h3>
        <h3>Ciudad: {datos.ciudad}</h3>
        <h3>Cp: {datos.cp}</h3>
      </div>
      <div className="container">
        <h3 className="text-center">Items</h3>

        {items.map((item) => (
          <div
            key={item.id}
            className={
              "flex px-4 md:px-8 lg:px-16 py-6 my-6 justify-between items-center bg-slate-100"
            }
          >
            <img
              src={item.imagen}
              alt={item.nombre}
              width={200}
              className="rounded-xl max-h-20 w-20 lg:max-h-28 lg:w-28 shadow-lg ml-8 lg:ml-0 shadow-slate-100/80 ring-2 ring-slate-700/50"
            />
            <p className="fw-bold mt-2">
              {item.nombre}
            </p>
            <div className="flex flex-col items-center sm:flex-row">
              <p className="sm:text-base md:text-lg lg:text-xl w-max-content text-slate-500 font-medium tracking-wide h-12 w-40 flex justify-center items-center">
              Cantidad: {item.cantidad} x ${item.precio} 
              </p>
              <p className="fw-bold">
                SubTotal: ${item.precio * item.cantidad}
              </p>
            </div>
          </div>
        ))}
        <div className="flex justify-center p-6">
          <h4 className="text-center">
            Total de la compra: $ {total}
          </h4>
        </div>
      </div>
      <div className="container text-center mt-5">
        <Link 
          className="btn btn-primary w-50"
          to='/'
        >
          Ir a inicio
        </Link>
      </div>
    </>
  );
};

export default OrderStatus;
