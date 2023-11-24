import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import logo from "../../public/img/taxi.jpg";
import { types } from "../types/type";

export const Nav = () => {

  const { dispatch } = useContext(AuthContext);
  
    const handleLogout = () => {
      localStorage.removeItem('token');

      dispatch({ type: types.LOGOUT });

      window.location.href = "/";
    }


    return (
        <nav className="navbar navbar-expand-md navbar-dark  bg-warning mb-4">
        <div className="container-fluid">
          {/* <img src={logo} /> */}
          <a className="navbar-brand" href="/">tuRemo</a>
    
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="btn btn-outline-light m-2" aria-current="page" href="/empresa">Empresa</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-light m-2" href="/soporte">Soporte</a>
              </li>
            </ul>
    
            <form className="d-flex" role="search">
              <a className="btn btn-outline-light m-2" aria-current="page" onClick={handleLogout}>Cerrar Sesion</a>
    
            </form>
          </div>
        </div>
      </nav>
    )
}