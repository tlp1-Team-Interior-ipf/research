import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
// import { PrivateRoutes } from './PrivateRoutes';
// import { PublicRoutes } from './PublicRoutes';
import { PageNotFound } from "../pages/PageNotFound";
import { Inicio } from "../pages/inicio";
import { InicioSesion } from "../pages/InicioSesion";
import { Home } from "../pages/home";
import { Signin } from "../pages/Signin";
import { Empresa } from "../pages/empresa";
import { Soporte } from "../pages/soporte";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const PublicRoutes = () => (
  <Routes>
    <Route index element={<Inicio />} />
    <Route path="/inicioSesion/*" element={<InicioSesion />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/empresa" element={<Empresa />} />
    <Route path="/soporte" element={<Soporte />} />
  </Routes>
);

// Rutas privadas
const PrivateRoute = () => {
  const { state } = useContext(AuthContext);
  return state.isLogged ? <Outlet /> : <Navigate to={"/"} />;
};
const PrivateRoutes = () => {
  return (
      <Route element={<PrivateRoute></PrivateRoute>}>
        <Route path="/home" element={<Home />} />
      </Route>
  );
};

export const Routers = () => {
  // const { state } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoutes />} />
        <Route path="/*" element={<PrivateRoutes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
