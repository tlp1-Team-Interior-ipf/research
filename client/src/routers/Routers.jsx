import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { PrivateRoutes } from './PrivateRoutes';
// import { PublicRoutes } from './PublicRoutes';
import { PageNotFound } from '../pages/PageNotFound'
import { Inicio } from '../pages/inicio';
import { InicioSesion } from '../pages/InicioSesion';
import { Signin } from '../pages/Signin';
import { Empresa } from '../pages/empresa';
import { Soporte } from '../pages/soporte';
<<<<<<< HEAD
<<<<<<< HEAD
import { PedidoViaje } from "../pages/pedido";
import { EmpresasDisponibles } from "../pages/empresasDisponibles";
=======
import {PasajeroPage} from '../pages/pasajero'; // Importa el componente de la vista del pasajero
>>>>>>> mauri
=======
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { PasajeroPage } from '../pages/pasajero';
import { ChoferPage } from '../pages/chofer';
>>>>>>> origin/mauri


const PublicRoutes = () => (
    <Routes>
      <Route index element={<Inicio />} />
      <Route path="/inicioSesion/*" element={<InicioSesion />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/empresa" element={<Empresa />} />
      <Route path="/soporte" element={<Soporte />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/chofer" element={<ChoferPage />} />
    </Routes>
  );
  

// Rutas privadas
const PrivateRoutes = () => (
    <Routes>
      <Route index path="/home" element={<PasajeroPage />} />
      <Route path="*" element={<PageNotFound />} />
      
    </Routes>
  );
export const Routers = () => {
    const { state } = useContext(AuthContext);
console.log(state)
    return (
        <BrowserRouter>
<<<<<<< HEAD
            <Routes>
                <Route
                    path="/"
                    element={
                        <PublicRoutes>
                            <Routes>
                                <Route index element={<Inicio />} />
                            </Routes>
                        </PublicRoutes>
                    }
                />
                <Route path="/inicioSesion/*" element={
                        <PublicRoutes>
                            <Routes>
                                <Route index element={<InicioSesion />} />
                            </Routes>
                        </PublicRoutes>
                    }
                />
                <Route path="/signin" element={
                        <PublicRoutes>
                            <Routes>
                                <Route index element={<Signin />} />
                            </Routes>
                        </PublicRoutes>
                    }
                />
                <Route path="/empresa" element={
                        <PublicRoutes>
                            <Routes>
                                <Route index element={<Empresa />} />
                            </Routes>
                        </PublicRoutes>
                    }
                />

                    { <Route path="/empresasDisponibles" element={
                        <PrivateRoutes>
                            <Routes>
                                <Route index element={<EmpresasDisponibles />} />
                            </Routes>
                        </PrivateRoutes>
                    }
                /> }

                <Route path="/soporte" element={
                        <PublicRoutes>
                            <Routes>
                                <Route index element={<Soporte />} />
                            </Routes>
                        </PublicRoutes>
                    }
                />
                <Route
                    path="/home"
                    element={
                        <PrivateRoutes>
                            <Routes>
                            <Route index element={<Home />} />
                            </Routes>
                        </PrivateRoutes>
                    }
                />
<<<<<<< HEAD

                <Route
                    path="/pedidoViaje"
                    element={
                        <PrivateRoutes>
                            <Routes>
                            <Route index element={<PedidoViaje />} />
=======
                <Route
                    path="/pasajero/*"
                    element={
                        <PrivateRoutes>
                            <Routes>
                            <Route index element={<PasajeroPage />} />
>>>>>>> mauri
                            </Routes>
                        </PrivateRoutes>
                    }
                />
<<<<<<< HEAD

=======
>>>>>>> mauri
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
=======
        {state.isLogged ? (
                <PrivateRoutes />
            ) : (
                <PublicRoutes />
                )
        }
      </BrowserRouter>
>>>>>>> origin/mauri
    )
}