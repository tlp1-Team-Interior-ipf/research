import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { PageNotFound } from '../pages/PageNotFound'
import { Inicio } from '../pages/inicio';
import { InicioSesion } from '../pages/InicioSesion';
import { Home } from '../pages/home';
import { Signin } from '../pages/Signin';
import { Empresa } from '../pages/empresa';
import { Soporte } from '../pages/soporte';
import { PedidoViaje } from "../pages/pedido";
import { EmpresasDisponibles } from "../pages/empresasDisponibles";


export const Routers = () => {

    return (
        <BrowserRouter>
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

                <Route
                    path="/pedidoViaje"
                    element={
                        <PrivateRoutes>
                            <Routes>
                            <Route index element={<PedidoViaje />} />
                            </Routes>
                        </PrivateRoutes>
                    }
                />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}