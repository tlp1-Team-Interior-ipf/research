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
import {PasajeroPage} from '../pages/pasajero'; 
import {ChoferPage} from '../pages/chofer';


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
                    path="/pasajero/*"
                    element={
                        <PrivateRoutes>
                            <Routes>
                            <Route index element={<PasajeroPage />} />
                            </Routes>
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/chofer"
                    element={
                        <PrivateRoutes>
                            <Routes>
                            <Route index element={<ChoferPage />} />
                            </Routes>
                        </PrivateRoutes>
                    }
                />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}