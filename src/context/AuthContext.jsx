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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const MySwal = withReactContent(Swal)

  const signup = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(auth.currentUser, {
        displayName: data.fullName,
        photoURL: data.photoURL,
      });
      MySwal.fire({
        title: "Registrado!",
        footer: "Yendo al login...",
        icon: "success",
        showConfirmButton: false,
      });
      setTimeout(() => {
        Swal.close();
        navigate(`/login`);
      }, 2000);
    } catch (error) {
      console.log(error)
      if (error.code === "auth/email-already-in-use") {
        MySwal.fire({
          title: "Error!",
          footer:
            "El correo electrónico ya está registrado. Intenta registrarte nuevamente.",
          icon: "error",
          showConfirmButton: false,
        });
    } else if (error.code) {
        MySwal.fire({
          title: "Hubo un error!",
          footer: "Por favor, intenta registrarte nuevamente.",
          icon: "error",
          showConfirmButton: false,
        });
      }
    }
  };

  const login = async (data) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
        data.photoURL,
        data.fullName
      );
      MySwal.fire({
        title: `¡Bienvenido ${userCredentials.user.displayName}!`,
        footer: "A continuación serás dirigido al home.",
        icon: "success",
        showConfirmButton: false,
      });
      setTimeout(() => {
        Swal.close();
        navigate(`/`);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  const loginGoogle = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      await signInWithPopup(auth, googleProvider);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
