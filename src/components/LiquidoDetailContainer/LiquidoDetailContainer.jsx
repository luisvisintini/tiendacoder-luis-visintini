import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LiquidoDetail from "../LiquidoDetail/LiquidoDetail";
import SpinnerKit from "../Spinner/SpinnerKit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const LiquidoDetailContainer = () => {
  const [liquido, setLiquido] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { liquidoId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "liquidos", liquidoId);

    getDoc(docRef)
      .then((doc) => {
        const data = doc.data();
        const liquidoConvert = { id: doc.id, ...data };

        setLiquido(liquidoConvert);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [liquidoId]);

  if (isLoading) {
    return <SpinnerKit />;
  }

  return (
    <div>
      <LiquidoDetail {...liquido} />
    </div>
  );
};

export default LiquidoDetailContainer;
