import { useContext } from "react"
import { AuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";

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
