import { useState, useEffect } from "react";
import LiquidosList from "../LiquidosList/LiquidosList";
import { useParams } from "react-router-dom";
import SpinnerKit from "../Spinner/SpinnerKit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const LiquidosContainer = ({ greeting }) => {
  const [liquidos, setLiquidos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { marcaId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    // referencia base de datos
    const collectionRef = marcaId
      ? query(collection(db, "liquidos"), where("marca", "==", marcaId))
      : collection(db, "liquidos");

    getDocs(collectionRef)
      .then((response) => {
        // console.log(response.docs)
        const liquidosConvert = response.docs.map((doc) => {
          const data = doc.data();

          return { id: doc.id, ...data };
        });

        setLiquidos(liquidosConvert);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [marcaId]);

  if (isLoading) {
    return <SpinnerKit />;
  }

  return (
    <div>
      <h1 className="text-center mt-5 fw-bold">{greeting}</h1>
      <LiquidosList liquidos={liquidos} />
    </div>
  );
};

export default LiquidosContainer;
