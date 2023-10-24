import taxi from '../assets/taxi.svg'
import { NavBar } from './navbar'
import { Footer } from './footer'


export const Register = () => {

    return (
        <>
            <NavBar />

            <main>
                <div>
                    <picture className='d-flex' style={{ justifyContent: 'center' }}>
                        <img className="" src={taxi} alt="Imagen de taxi" style={{ width: '100px' }} />
                    </picture>

                    <div className="letras">
                        <div className="d-grid gap-2 col-6 mx-auto">

                            <h1 className="text-warning text-center">Elige cómo quieres registrarte</h1>

                            <a href="/signinguser" className=" d-grid gap-2 col-6 mx-auto button btn btn-warning text-light">Usuario</a>

                            <a href="/signingempresa" className=" d-grid gap-2 col-6 mx-auto button btn btn-warning text-light">Empresa</a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}