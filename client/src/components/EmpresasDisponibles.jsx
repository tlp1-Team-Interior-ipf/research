import React, { useState } from "react";
import "./empresa.css";

export const EmpresasDisp = ({
  montoRealLibertad,
  montoRealMontecarlo,
  montoRealNapoleon,
  enviarDatosAlServidor, // Recibe la función para enviar datos al servidor
}) => {

  const handleSolicitarViaje = (idEmpresa) => {
    enviarDatosAlServidor(idEmpresa); // Llama a la función para enviar datos al servidor
  };



  return (
    <main>
      <form action="" onSubmit={handleSubmit}>
      <div className="letras">
          <div className="album py-5 bg-body-tertiary">
            <div className="container">
              <h2>Empresas disponibles</h2>
              <br />
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                
                <div className="col">
                  
                  <div className="card shadow-sm">
                    <img
                      src="/img/remises libertad.jpg"
                      alt="Remises Libertad"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Remises Libertad</h5>
                      <p className="card-text">Av. Gutnisky 2133</p>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Solicitar viaje
                      </button>

                      <div
                        className="modal fade "
                        id="exampleModal"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-x d-flex">
                          <div className="modal-content overflow-y-auto">
                            <div className="modal-header">
                              <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Sala de espera...
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => handleSolicitarViaje(1)}
                              ></button>
                            </div>

                            <div className="modal-footer justify-content-between">
                              
                              <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                User 1
                              </h1>
                              
                              <div>
                              </div>

                              <button type="button" className="btn btn-danger">
                                Cancelar pedido
                              </button>
                              

                            </div>
                            <div>
                            <img src="/img/user.jpg" width={'100px'} alt="" />
                                <h4>Pedido de viaje </h4>
                            <i>El pedido de tu viaje ha pasado a manos de los choferes que estan disponibles, espera ha la confirmación de un chofer y luego confirma el pago que costara el viaje.</i>

                            </div>
                            <div className="modal-body"><i></i></div>
                            
                            
                          </div>
                        </div>
                        
                      </div>

                      <p className="monto-aproximado">
                        Monto aproximado: $
                        {montoRealLibertad || "Calculando..."}
                      </p>
                    </div>
                  </div>

                </div>
              
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      src="/img/remises montecarlo.jpg"
                      alt="Remises Montecarlo"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Remises Montecarlo</h5>
                      <p className="card-text">
                        Trinidad González 629, P3600 Formosa
                      </p>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleSolicitarViaje(2)}
                      >
                        Solicitar Viaje
                      </button>
                      <p className="monto-aproximado">
                        Monto aproximado: $
                        {montoRealMontecarlo || "Calculando..."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      src="/img/remises napoleón.jpg"
                      alt="Remises Napoleón"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Remises Napoleón</h5>
                      <p className="card-text">
                        Av. Napoleón Uriburu 1645, P3600 DQY, Formosa.
                      </p>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleSolicitarViaje(3)}
                      >
                        Solicitar Viaje
                      </button>
                      <p className="monto-aproximado">
                        Monto aproximado: $
                        {montoRealNapoleon || "Calculando..."}
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};
