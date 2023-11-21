import taxi from '../assets/taxi.svg'
import { NavBar } from '../components/navbar'
import { Footer } from '../components/footer'


export const LoginEmpresa = () => {

    return (

        <>
            <NavBar />

            <main>
                <div>

                    <picture className="d-flex justify-content-center">
                        <img className="img-fluid" src={taxi} alt="Imagen de taxi" style={{ width: '100px' }} />
                    </picture>

                    <div>
                        <form id="formulario" style={{}}>

                            <h1 className="h3 mb-3 fw-normal text-center text-warning m-1">Inicio de sesión de empresa</h1>

                            <div className="form-floating">
                                <input type="email" className="form-control m-1" id="email" name="email" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Correo Electrónico</label>
                            </div>

                            <div className="form-floating">
                                <input type="password" className="form-control m-1" id="contraseña" name="contraseña" placeholder="Password" />
                                <label htmlFor="floatingPassword">Contraseña</label>
                            </div>

                            <div className="form-check text-start my-3">
                                <input className="form-check-input m-1" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Recordarme
                                </label>
                            </div>

                            <div className='d-flex justify-content-center'>
                                <button type="submit" className="btn btn-warning text-light">Iniciar Sesión</button>
                            </div>

                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}