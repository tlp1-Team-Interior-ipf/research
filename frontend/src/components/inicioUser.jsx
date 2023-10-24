import mapaSVG from '../assets/formosa.svg'
import { NavBar } from './navbar'
import { Footer } from './footer'



export const InicioUser = () => {
    return (
        <>
            <NavBar />

            <form className="d-flex m-2 p-2" style={{ borderBottom: '1px solid #aaa' }}>
                <input className="form-control me-2" type="search" placeholder="Buscar calle" aria-label="Search" />
                <button className="btn btn-outline-warning " type="submit">Buscar</button>
            </form>

            <form action="">
                <input id="origen" type="text" className="form-control me-2  border-0 border-bottom" 
                placeholder="¿Dónde estás?"/>
                <input id="destino" type="text" className="form-control me-2  border-0 border-bottom"
                placeholder="¿Dónde quieres ir?"/>
                <div id="map"></div>

                <div className='d-flex' style={{ justifyContent: 'center' }}>
                    <button style={{ display: "block" }} type="button" className="btn btn-warning m-2 text-light">Pedir remis</button>
                </div>
            </form>

            <div className="row g-5 " style={{marginRight:'0px'}}>

                <picture style={{ display: "inline-block", position: "relative" }} className="col-lg-6 d-flex justify-content-between">
                    <img style={{ width: "325px", height: "300px", marginBottom: "50px" }} src={mapaSVG} alt="" />
                </picture>

                <div className="col-md-5 col-lg-4 order-md-last ">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-warning">Costo de viaje</span>
                        <span className="badge bg-warning rounded-pill">3</span>
                    </h4>
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">Tu ubicación</h6>
                                <small className="text-body-secondary">C. 25 de Mayo</small>
                            </div>
                            <span className="text-body-secondary">$400</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">Destino</h6>
                                <small className="text-body-secondary">Supermercado Caceres</small>
                            </div>
                            <span className="text-body-secondary">$500</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">Propina</h6>
                                <small className="text-body-secondary">Ayuda a chofer</small>
                            </div>
                            <span className="text-body-secondary">$300</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                            <div className="text-success">
                                <h6 className="my-0">Promo code</h6>
                                <small>EXAMPLECODE</small>
                            </div>
                            <span className="text-success">−$100</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (ARG)</span>
                            <strong>$1100</strong>
                        </li>
                    </ul>

                    <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Promo code" />
                            <button type="submit" className="btn btn-warning text-light">Canjear</button>
                        </div>
                    </form>
                </div>

            </div>

            <Footer />
        </>
    )
}