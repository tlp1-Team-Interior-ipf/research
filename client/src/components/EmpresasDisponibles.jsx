
import React from 'react';
import './empresa.css';

export const EmpresasDisp = () => {
    return (
        <main>
            <div>
                <div className='d-flex justify-content-center'>
                    <img className="img-fluid" src="/img/image.png" alt="Imagen de taxi" height="300" width="300" />
                </div>
                <div className="letras">
                    <div className="album py-5 bg-body-tertiary">
                        <div className="container">
                            <h2>Empresas disponibles</h2>
                            <br />
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <img src="/img/remises fontana.jpeg" alt="Remises Fontana" />
                                        <div className="card-body">
                                            <h5 className="card-title">Remises Fontana</h5>
                                            <p className="card-text">Pantaleon Gomez 636. C.P. P3600KYN, Formosa, Formosa.</p>
                                            <button className="btn btn-primary">Solicitar Viaje</button>
                                            <p className="monto-aproximado">Monto aproximado: $20</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <img src="/img/remises libertad.webp" alt="Remises Libertad" id="libertad" />
                                        <div className="card-body">
                                            <h5 className="card-title">Remises Libertad</h5>
                                            <p className="card-text">Av Gutnisky 2133. C.P. P3600, Formosa, Formosa.</p>
                                            <button className="btn btn-primary">Solicitar Viaje</button>
                                            <p className="monto-aproximado">Monto aproximado: $25</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <img src="/img/remises litur.png" alt="Remises Litur" />
                                        <div className="card-body">
                                            <h5 className="card-title">Remises Litur</h5>
                                            <p className="card-text">Av. González Lelong 1025, P3600 DGB, Formosa</p>
                                            <button className="btn btn-primary">Solicitar Viaje</button>
                                            <p className="monto-aproximado">Monto aproximado: $18</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <img src="/img/remises montecarlo.jpg" alt="Remises Montecarlo" />
                                        <div className="card-body">
                                            <h5 className="card-title">Remises Montecarlo</h5>
                                            <p className="card-text">Trinidad González 629, P3600 Formosa</p>
                                            <button className="btn btn-primary">Solicitar Viaje</button>
                                            <p className="monto-aproximado">Monto aproximado: $22</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <img src="/img/remises napoleón.jpg" alt="Remises Napoleón" />
                                        <div className="card-body">
                                            <h5 className="card-title">Remises Napoleón</h5>
                                            <p className="card-text">Av. Napoleón Uriburu 1645, P3600 DQY, Formosa.</p>
                                            <button className="btn btn-primary">Solicitar Viaje</button>
                                            <p className="monto-aproximado">Monto aproximado: $30</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <img src="/img/remises norte.jpeg" alt="Remises Norte" id="remisesnorte" />
                                        <div className="card-body">
                                            <h5 className="card-title">Remises Norte</h5>
                                            <p className="card-text">Pringles 165, P3600 Formosa</p>
                                            <button className="btn btn-primary">Solicitar Viaje</button>
                                            <p className="monto-aproximado">Monto aproximado: $28</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Repite la estructura similar para otras tarjetas */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
