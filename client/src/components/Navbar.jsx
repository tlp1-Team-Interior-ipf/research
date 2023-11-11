import React, { useState, useEffect } from 'react';
import { Registro } from './Registro';
import { Login } from './Login';

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

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
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [showModal, showLoginModal]);

  
 return (
   
  <nav className="navbar navbar-expand-md navbar-dark bg-warning mb-4">
  <div className="container-fluid" style={{ display: 'flex', flexDirection: 'column' }}>
    <img src="./img/taxi.jpg" style={{ width: '50px', opacity: 0.5 }} alt="" />
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
        <li className="nav-item">
          <a className="btn btn-outline-light m-2" aria-current="page" href="/empresa">
            Empresa
          </a>
        </li>
        <li className="nav-item">
          <a className="btn btn-outline-light m-2" href="/soporte">
            Soporte
          </a>
        </li>
      </ul>

      <form className="d-flex" role="search">
        <button className="btn btn-outline-light m-2" onClick={openModal} aria-current="page">
          Registrarse
        </button>
        <br />
        <button
        className="btn btn-outline-light m-2"
        onClick={openLoginModal} 
        aria-current="page"
      >
        Ingresar
      </button>
      </form>
    </div>
  </div>

  
  {showModal && (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
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
            <button type="button" className="btn btn-secondary" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
   {showLoginModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Ingresar</h5>
                <button type="button" className="close" onClick={closeLoginModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Login /> 
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeLoginModal}>
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
