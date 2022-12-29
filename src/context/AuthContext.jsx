import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import { auth } from "../services/firebase/firebaseConfig";


export const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}

export function AuthProvider ({children}) {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // todo: agregar fullName, photoURL
  const signup = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password)
      await updateProfile(auth.currentUser, {
      displayName: data.fullName,
      photoURL: data.photoURL,
    })
    } catch (error) {
      console.log(error)
    }
    
  }

  const login = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password, data.photoURL, data.fullName)
    } catch (error) {
      console.log(error);
    }
    
    // console.log(useCredentials)
    // todo: useCredentials nos devuelve info de displayName y photoURL cuando inicamos con google, emailVerified para el reenvio de mail. Devuelve null si es por acceso directo sin google
  }

  // todo: onAuthStateChanged para volver el estado a cero (logout por ejemplo)

  const logout = () => {
    signOut(auth)
  }

  const loginGoogle = async () => {
    try {
      const googleProvider = new GoogleAuthProvider()
      await signInWithPopup(auth, googleProvider)
      return
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      setUser(currentUser)
      setLoading(false)
    })
  }, [])


  return (
    <AuthContext.Provider 
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginGoogle

      }}
    >
      {children}
    </AuthContext.Provider>
  )
}