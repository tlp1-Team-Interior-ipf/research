import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { PrivateRoutes } from './PrivateRoutes';
// import { PublicRoutes } from './PublicRoutes';
// import { PageNotFound } from '../pages/PageNotFound'
import { Inicio } from '../pages/inicio';
import { InicioSesion } from '../pages/InicioSesion';
import { Signin } from '../pages/Signin';
import { Empresa } from '../pages/empresa';
import { Soporte } from '../pages/soporte';
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { PasajeroPage } from '../pages/pasajero';
import { ChoferPage } from '../pages/chofer';
import { ChoferPasajeroPage } from '../pages/choferpasajero';


const PublicRoutes = () => (
    <Routes>
      <Route index element={<Inicio />} />
      <Route path="/inicioSesion/*" element={<InicioSesion />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/empresa" element={<Empresa />} />
      <Route path="/soporte" element={<Soporte />} />
      <Route path={`/choferpasajero/:travelId`} element={<ChoferPasajeroPage />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
  

// Rutas privadas
const PrivateRoutes = () => (
    <Routes>
      <Route index path="/home" element={<PasajeroPage />} />
      <Route path="/chofer" element={<ChoferPage />} />
      <Route path={`/choferpasajero/:travelId`} element={<ChoferPasajeroPage />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
      
    </Routes>
  );
export const Routers = () => {
    const { state } = useContext(AuthContext);
console.log(state)
    return (
        <BrowserRouter>
        {state.isLogged ? (
                <PrivateRoutes />
            ) : (
                <PublicRoutes />
                )
        }
      </BrowserRouter>
    )
}