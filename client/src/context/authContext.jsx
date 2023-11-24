import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers/authReducer";
import { types } from "../types/type";


export const AuthContext = createContext(null);

export const AuthUser = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { isLogged: false });

  useEffect(() => {
    // Se utiliza un efecto para verificar si hay un token en el localstorage y, en caso afirmativo, se cambia el estado de isLogged a true
    if (localStorage.getItem("token")) {
      dispatch({ type: types.LOGIN });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ dispatch, state }}>
      {children}
    </AuthContext.Provider>
  );
};
