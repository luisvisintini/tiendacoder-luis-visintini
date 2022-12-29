import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import SpinnerKit from "../Spinner/SpinnerKit";

export function ProtectedRoute({children}) {
    const {user, loading } = useAuth()

    if(loading) return <SpinnerKit /> 

    if(!user) return <Navigate to='/login' />

    return <>{children}</>
}