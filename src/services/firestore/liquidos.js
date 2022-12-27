import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

// referencia base de datos
export const collectionRef = (marcaId) => {
    return new Promise ((resolve, reject) => {
        const collectionRef = marcaId
        ? query(collection(db, "liquidos"), where("marca", "==", marcaId))
        : collection(db, "liquidos")

        getDocs(collectionRef)
            .then((response) => {
            const liquidosConvert = response.docs.map((doc) => {
                const data = doc.data();
                return { id: doc.id, ...data };
            });

                resolve(liquidosConvert);
            })
            .catch((error) => {
                reject(error);
            })
    })
}



