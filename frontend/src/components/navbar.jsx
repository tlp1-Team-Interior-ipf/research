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
          <a href="/register" className="btn btn-warning text-light btn-outline-light m-2">Registrarse</a>

          <a href="/login" className="btn btn-warning text-light btn-outline-light m-2">Ingresar</a>
        </form>

      </div>
    </div>
            </nav>
        </div>
        )
    }
    


