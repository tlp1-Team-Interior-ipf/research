export const NavBar = () => {





  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-warning ">
        <div className="container-fluid">
          <a className="navbar-brand" href={"/"}>tuRemo</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={"/empresa"}>Empresa</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/support">Soporte</a>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <button type="button" className="btn btn-warning text-light btn-outline-light m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Registrarse
              </button>

              <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5 text-warning" id="exampleModalLabel">¿Cómo quieres registrarte?</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-footer d-flex justify-content-center gap-1 ">
                      <a href="/signinguser" className="gap-1 d-grid gap-2 col-6 mx-auto button btn btn-warning text-light">Usuario</a>
                      <a href="/signingempresa" className="gap-1 d-grid gap-2 col-6 mx-auto button btn btn-warning text-light">Empresa</a>
                    </div>
                  </div>
                </div>
              </div>


              <button type="button" className="btn btn-warning text-light btn-outline-light m-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Ingresar
              </button>

              <div className="modal fade" id="exampleModal2" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5 text-warning text-center" id="exampleModalLabel2">¿Cómo quieres iniciar sesión?</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-footer d-flex justify-content-center gap-1 ">
                      <a href="/loginuser" className=" d-grid gap-2 col-6 mx-auto button btn btn-warning text-light">Usuario</a>
                      <a href="/loginempresa" className=" d-grid gap-2 col-6 mx-auto button btn btn-warning text-light">Empresa</a>
                    </div>
                  </div>
                </div>
              </div>
            </form>

          </div>
        </div>
      </nav>
    </div>
  )
}



