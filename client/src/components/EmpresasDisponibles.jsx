import React from 'react';
import './empresa.css';

export const EmpresasDisp = ({
    montoRealLibertad,
    montoRealMontecarlo,
    montoRealNapoleon}) => {
    return (
        <main>
            <div>
                <div className="letras">
                    <div className="album py-5 bg-body-tertiary">
                        <div className="container">
                            <h2>Empresas disponibles</h2>
                            <br />
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <img src="/img/remises libertad.webp" alt="Remises Libertad" id="libertad" />
                                        <div className="card-body">
                                            <h5 className="card-title">Remises Libertad</h5>
                                            <p className="card-text">Av Gutnisky 2133. C.P. P3600, Formosa, Formosa.</p>
                                            <button className="btn btn-primary">Solicitar Viaje</button>
                                            <p className="monto-aproximado">Monto aproximado: ${montoRealLibertad || 'Calculando...'}</p>
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
                                            <p className="monto-aproximado">Monto aproximado: ${montoRealMontecarlo || 'Calculando...'}</p>
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
                                            <p className="monto-aproximado">Monto aproximado: ${montoRealNapoleon || 'Calculando...'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}