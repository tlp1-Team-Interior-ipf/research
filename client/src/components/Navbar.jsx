import React, { useState, useEffect, useContext } from "react";
import { Registro } from "./Registro";
import { Login } from "./Login";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";
import { types } from "../types/type";

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { state, dispatch } = useContext(AuthContext);

  const openModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openLoginModal = (e) => {
    e.preventDefault();
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  useEffect(() => {
    if (showModal || showLoginModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [showModal, showLoginModal]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch({ type: types.LOGOUT });
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-warning mb-4">
      <div
        className="container-fluid"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <img
          src="./img/taxi.jpg"
          style={{ width: "50px", opacity: 0.5 }}
          alt=""
        />
        <a className="navbar-brand" href="/">
          tuRemo
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {state.isLogged ? (
              // Usuario logeado
              <>
                <li className="nav-item">
                  <Link className="btn btn-outline-light m-2" to="/empresa">
                    Empresa
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-light m-2" to="/soporte">
                    Soporte
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light m-2"
                    onClick={handleLogout}
                  >
                    Cerrar Sesión
                  </button>
                </li>
              </>
            ) : (
              // Usuario no logeado
              <>
                <li className="nav-item">
                  <Link className="btn btn-outline-light m-2" to="/empresa">
                    Empresa
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-light m-2" to="/soporte">
                    Soporte
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="btn btn-outline-light m-2"
                    onClick={openModal}
                  >
                    Registrarse
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="btn btn-outline-light m-2"
                    onClick={openLoginModal}
                  >
                    Ingresar
                  </Link>
                </li>
              </>
            )}
          </ul>

          <form className="d-flex" role="search">
            {/* Resto del formulario */}
          </form>
        </div>
      </div>

      {showModal && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Registro</h5>
                <button type="button" className="close" onClick={closeModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Registro />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showLoginModal && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Ingresar</h5>
                <button
                  type="button"
                  className="close"
                  onClick={closeLoginModal}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Login />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeLoginModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};