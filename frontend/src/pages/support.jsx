import { NavBar } from '../components/navbar.jsx'
import { Footer } from '../components/footer.jsx'


export const Support = () => {

    return (
        <>
            <NavBar />

            <main>
                <div>
                    <div className="m-2">
                        <form id="formulario">
                            <h1 className="h3 mb-3 fw-normal text-warning text-center">¿Necesitas ayuda? Contáctanos por email.</h1>

                            <div className="form-floating m-1">
                                <input type="email" className="form-control" id="floatingInput1" placeholder="name@example.com" />
                                <label htmlFor="floatingInput1">Correo Electrónico</label>
                            </div>
                            <div className="form-floating m-1">
                                <input type="email" className="form-control" id="floatingInput2" placeholder="name@example.com" />
                                <label htmlFor="floatingInput2">Nombre de usuario</label>
                            </div>
                            <div className="form-floating m-1">
                                <input type="email" className="form-control" id="floatingInput3" placeholder="name@example.com" />
                                <label htmlFor="floatingInput3">Nombre y Apellido</label>
                            </div>
                            <div className="form-floating m-1">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Asunto</label>
                            </div>
                            <div className="form-floating m-1">
                                <textarea className="form-control" id="floatingTextarea"></textarea>
                                <label htmlFor="floatingTextarea">Aquí su mensaje...</label>
                            </div>

                            <div className='d-flex justify-content-center'>
                                <button type="button" className="btn btn-warning m-1 text-light">Enviar consulta</button>
                            </div>

                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}