import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export const PrivateRoutes = ({ children }) => {

    const { state } = useContext(AuthContext);


    return (state.isLogged)
        ? (
            <Navigate to={'/home'} />
        )
        : (
            children
        )
}