import { useContext } from "react"
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {

    const { state } = useContext(AuthContext);

console.log(state.isLogged)
    return (state.isLogged)
        ? (
            <Navigate to={'/home'} />
        )
        : (
            children
        )
}
