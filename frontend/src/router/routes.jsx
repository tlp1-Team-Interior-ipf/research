import { Index } from '../Index.jsx'
import { Empresa } from '../pages/Empresa.jsx'
import { Support } from '../pages/support.jsx'
import { SupportChofer } from '../pages/support.chofer.jsx'
import { InicioUser } from '../pages/inicioUser.jsx'
import { InicioChofer } from '../pages/inicioChofer.jsx'
import { Login } from '../components/login.jsx'
import { Register } from '../components/register.jsx'
import { SigninEmpresaa } from '../pages/sign.in.empresa.jsx'
import { Signinuser } from '../pages/sign.in.user.jsx'
import { LoginUser } from '../pages/login.user.jsx'
import { LoginEmpresa } from '../pages/login.empresa.jsx'
import { createBrowserRouter} from "react-router-dom"
import ChoferAndUser from '../pages/ChoferAndUser.jsx'
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
    },
    {
        path: "/choferuser",
        element: <ChoferAndUser />,
    },
    {
        path: "/empresa",
        element: <Empresa />,
    },
    {
        path: "/support",
        element: <Support />
    },
    {
        path: "/supportchofer",
        element: <SupportChofer />
    },
    {
        path: "/iniciouser",
        element: <InicioUser />
    },
    {
        path: "/iniciochofer",
        element: <InicioChofer />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/signingempresa",
        element: <SigninEmpresaa />
    },
    {
        path: "/signinguser",
        element: <Signinuser />
    },
    {
        path: "/loginuser",
        element: <LoginUser />
    },
    {
        path: "/loginempresa",
        element: <LoginEmpresa />
    },
]);