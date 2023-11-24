import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export const PublicRoutes = ({ children }) => {

    // Acceder a la información del contexto
    const { state } = useContext(AuthContext)
  
  
    return ( !state.isLogged )
            ? children
            : <Navigate to={'/home'} />
  }


