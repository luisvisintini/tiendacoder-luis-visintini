import { useState } from "react";
import { BsCart4 } from "react-icons/bs";

const ItemCount = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(0);

  const suma = () => {
    if (contador < stock) {
      setContador((previo) => previo + 1);
    }
  };

  const resta = () => {
    if (contador > 0) {
      setContador((previo) => previo - 1);
    }
  };

  return (
    <div className="container text-center mt-5">
      <button onClick={suma} className="btn btn-black">
        +
      </button>
      <button className="btn btn-tranparent">{contador}</button>
      <button onClick={resta} className="btn btn-black me-2">
        -
      </button>
      <div>
        <button
          onClick={() => onAdd(contador)}
          disabled={!contador}
          className="btn btn-success w-100 mt-3"
        >
          Agregar al <BsCart4 />
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
