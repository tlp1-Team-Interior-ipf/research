import taxi from '../assets/taxi.svg'
import { NavBar } from './navbar'
import { Footer } from './footer'


export const Login = () => {

    return (
        <>
            <NavBar />

            <main>
                <div>
                    <picture className='d-flex justify-content-center'>
                        <img className="img-fluid " src={taxi} alt="Imagen de taxi" style={{ width: '100px' }} />
                    </picture>

                    <div>
                        <div className="d-grid gap-2 col-6 mx-auto text-warning text-center">

                            <h1>Elige cómo quieres iniciar sesión</h1>

                            <a href="/loginuser" className=" d-grid gap-2 col-6 mx-auto button btn btn-warning text-light">Usuario</a>
                            <a href="/loginempresa" className=" d-grid gap-2 col-6 mx-auto button btn btn-warning text-light">Empresa</a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}