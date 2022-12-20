
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhyjNLtYhS0KeGulfAUE0AZ9KOhmJsElI",
  authDomain: "tiendacoder-e55f2.firebaseapp.com",
  projectId: "tiendacoder-e55f2",
  storageBucket: "tiendacoder-e55f2.appspot.com",
  messagingSenderId: "873055371908",
  appId: "1:873055371908:web:d2ffc48cd40c565328f8d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// conectamos la base de datos de firestore a la app
export const db = getFirestore(app)