import taxi from '../assets/taxi.svg'
import { NavBar } from './navbar'
import { Footer } from './footer'


export const SigninEmpresaa = () => {

    return (

        <>
            <NavBar />

            <main>
                <div>
                    <picture className="d-flex" style={{ justifyContent: 'center' }}>
                        <img src={taxi} alt="Imagen de taxi" style={{ width: '100px' }} />
                    </picture>

                    <div>

                        <form action="">

                            <h1 className="h3 mb-3 fw-normal m-1 text-warning text-center">Registrarse como empresa</h1>
                            <div className="form-floating">
                                <input type="text" className="form-control m-1" id="nombre" name="nombre" placeholder="Nombre" />
                                <label htmlFor="floatingInput">Nombre de la Empresa</label>
                            </div>

                            <div className="form-floating">
                                <input type="text" className="form-control m-1" id="CUIT" name="CUIT" placeholder="CUIT" />
                                <label htmlFor="floatingInput">CUIT</label>
                            </div>

                            <div className="form-floating">
                                <input type="email" className="form-control m-1" id="email" name="email" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Correo Electrónico</label>
                            </div>

                            <div className="form-floating">
                                <input type="password" className="form-control m-1" id="contraseña" name="contraseña" placeholder="Password" />
                                <label htmlFor="floatingPassword">Contraseña</label>
                            </div>

                            <div className="form-floating">
                                <input type="password" className="form-control m-1" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Confirmar Contraseña</label>
                            </div>

                            <div className="form-floating">
                                <input type="text" className="form-control m-1" id="telefono" name="telefono" placeholder="Teléfono" />
                                <label htmlFor="floatingInput">Teléfono</label>
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