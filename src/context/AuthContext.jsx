import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { auth } from "../services/firebase/firebaseConfig";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const MySwal = withReactContent(Swal)

  const signup = async (email, password, fullName, photoURL) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: fullName,
        photoURL: photoURL,
      });
      MySwal.fire({
        title: "Registrado!",
        footer: "Yendo al login...",
        icon: "success",
        showConfirmButton: false,
      });
      setTimeout(() => {
        Swal.close();
        navigate('/login');
      }, 2000);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        MySwal.fire({
          title: "Error!",
          footer:
            "El correo electrónico ya está registrado. Intenta registrarte con otro correo.",
          icon: "error",
          showConfirmButton: true,
        });
    } else if (error.code) {
        MySwal.fire({
          title: "Hubo un error! La contraseña debe tener minimo 6 caracteres",
          footer: "Por favor, intenta registrarte nuevamente.",
          icon: "error",
          showConfirmButton: true,
        });
      }
    }
  };

  const login = async (email, password, photoURL, fullName) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password,
        photoURL,
        fullName
      );
      MySwal.fire({
        title: `¡Hola ${userCredentials.user.displayName}!`,
        footer: "Yendo a inicio....",
        icon: "success",
        showConfirmButton: false,
      });
      setTimeout(() => {
        Swal.close();
        navigate('/');
      }, 2000);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        MySwal.fire({
          title: "Hubo un error!",
          footer:
            "El correo no existe. Intenta nuevamente.",
          icon: "error",
          showConfirmButton: false,
          timer: 3000,
        });
      } else if (error.code === "auth/wrong-password") {
        MySwal.fire({
          title: "Hubo un error!",
          footer: "Contraseña incorrecta, intenta nuevamente.",
          icon: "error",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    }
  };

  const logout = async () => {
    await signOut(auth);
    MySwal.fire({
      title: "¡Cerraste Sesión!",
      footer: "Regresa cuando quieras",
      padding: "2em",
      color: "#000000",
      backdrop: `
          #bb480066
          url("https://i.ibb.co/ZK5dSsb/nyan-cat.gif")
          left top
          no-repeat
        `,
      showConfirmButton: false,
    });
    setTimeout(() => {
      Swal.close();
      navigate('/login');
    }, 2500);
  };

  const loginGoogle = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      const userCredentials = await signInWithPopup(auth, googleProvider);
      MySwal.fire({
        title: `¡Hola ${userCredentials.user.displayName}!`,
        footer: "Yendo a inicio....",
        icon: "success",
        showConfirmButton: false,
      });
      setTimeout(() => {
        Swal.close();
        navigate('/');
      }, 2000);
      
    } catch (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        MySwal.fire({
          title: "Hubo un error!",
          footer:
            "Ese correo ya existe. Intenta nuevamente.",
          icon: "error",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        MySwal.fire({
          title: "Hubo un error!",
          footer: "Intenta nuevamente.",
          icon: "error",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser)
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        signup,
        loginGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
