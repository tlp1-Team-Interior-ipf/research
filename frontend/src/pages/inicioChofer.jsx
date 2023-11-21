import { Footer } from "../components/footer";

export const InicioChofer = () => {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-md navbar-dark  bg-warning ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href={"/iniciochofer"}>
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
                                    <a className="nav-link active" href="/supportchofer">
                                        Soporte
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <main>
                <div className=" d-flex justify-content-center m-1">
                <button type="button" class="text-light btn btn-warning position-relative">
                    Notificaciones
                    <span className='position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle'>
                        <span class="visually-hidden">Notication</span>
                    </span>
                </button>
                </div>
                

                <div className="row py-lg-5 m-1" style={{ padding: "20px" }}>
                    <div
                        className="col-lg-6 col-md-8 mx-auto"
                        style={{
                            borderTop: "1px solid #000",
                            borderBottom: "1px solid #000",
                        }}
                    >
                        <p className="lead text-body-secondary">
                            El monto a pagar se calculará mediante la distancia recorrida,
                            teniendo en cuenta que cada 500mts son $300ARG, se recomienda el
                            aviso del cinturon de seguridad a todos los presentes.
                        </p>
                        <p>
                            <i>Att: La empresa de remis.</i>

                            <div className="card">
                                <div className="card-body">
                                    <p className="card-text">
                                        Distancia Recorrida: <span id="distancia">0 km</span>
                                    </p>
                                    <p className="card-text">
                                        Monto a Pagar: $<span id="monto">0.00</span>
                                    </p>
                                    <a href="#" className="btn btn-warning my-2 text-light">
                                        Iniciar viaje
                                    </a>
                                    <a href="#" className="btn btn-danger my-2 text-light">
                                        Detener viaje
                                    </a>
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};
