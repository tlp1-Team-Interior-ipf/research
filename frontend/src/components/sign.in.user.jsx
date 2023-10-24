import taxi from '../assets/taxi.svg'
import { NavBar } from './navbar'
import { Footer } from './footer'


export const Signinuser = () => {

    return (
        <>
            <NavBar />

            <main>
                <div>
                    <picture className="d-flex" style={{ justifyContent: 'center' }}>
                        <img style={{ width: '100px' }} src={taxi} alt="Imagen de taxi" />
                    </picture>
                    <div>

                        <form id="formulario" action="#">
                            <h1 className="h3 mb-3 fw-normal text-warning m-1 text-center">Registrarse como usuario</h1>
                            <div className="form-floating">
                                <input type="email" className="form-control m-1" id="email" name="email" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Correo Electrónico</label>
                            </div>

                            <div className="form-floating">
                                <input type="password" className="form-control m-1" id="contraseña" name="contraseña" placeholder="Password" />
                                <label htmlFor="floatingPassword">Contraseña</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control m-1" id="confirmcontraseña" name="confirmcontraseña"
                                    placeholder="Password" />
                                <label htmlFor="floatingPassword">Confirmar Contraseña</label>
                            </div>

                            <div className="form-floating">
                                <input type="text" className="form-control m-1" id="nombre" name="nombre" placeholder="Nombre" />
                                <label htmlFor="floatingInput">Nombre</label>
                            </div>

                            <div className="form-floating">
                                <input type="text" className="form-control m-1" id="apellido" name="apellido" placeholder="Apellido" />
                                <label htmlFor="floatingInput">Apellido</label>
                            </div>

                            <div className="form-floating">
                                <input type="text" className="form-control m-1" id="telefono" name="telefono" placeholder="Teléfono" />
                                <label htmlFor="floatingInput">Teléfono</label>
                            </div>

                            <div className="form-floating">
                                <input type="date" className="form-control m-1" id="fecha_nac" name="fecha_nac" placeholder="Fecha de Nacimiento" />
                                <label htmlFor="floatingInput">Fecha de Nacimiento</label>
                            </div>

                            <div className="form-check text-start my-3 m-1">
                                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Recordarme
                                </label>
                            </div>

                            <div className='d-flex' style={{ justifyContent: 'center' }}>
                                <button type="submit" className="btn btn-warning text-light m-1">Registrarme</button>
                            </div>
                        </form>
                    </div>
                </div>

            </main>

            <Footer />
        </>
    )
}