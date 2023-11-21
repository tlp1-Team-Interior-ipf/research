import { Footer } from "../components/footer"
import { NavBar } from "../components/navbar"
import RemisesLibertad from '../assets/RemisesLibertad.svg'
import RemisesFontana from '../assets/RemisesFontana.svg'
import RemisesLitur from '../assets/RemisesLitur.svg'
import RemisesMontecarlo from '../assets/RemisesMontecarlo.svg'
import RemisesNapoleón from '../assets/RemisesNapoleón.svg'
import RemisesNorte from '../assets/RemisesNorte.svg'

export const Empresa = () => {

    return (

        <>
        <NavBar/>
            <main>
                <div>
                    {/* <img class="img-fluid" src="img/image.png" alt="Imagen de taxi" height="300" width="300"> */}
                    <div className="letras">
                        <div className="album py-5 bg-body-tertiary">
                            <div className="container">
                                <h2 className="text-warning text-center">Empresas disponibles</h2>
                                {/* <br> */}
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
                                    <div className="col">
                                        <div className="card shadow-sm" >
                                            <img src={RemisesFontana} alt="" />
                                            <title>Placeholder</title>
                                            <p>Remises Fontana</p>
                                            <div className="card-body">
                                                <p className="card-text">Pantaleon Gomez 636. C.P. P3600KYN, Formosa, Formosa.</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-sm">
                                            <img src={RemisesLibertad} alt="" />
                                            <title>Placeholder</title><p>Remises Libertad</p>
                                            <div className="card-body">
                                                <p className="card-text">Av Gutnisky 2133. C.P. P3600, Formosa, Formosa.</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-sm">
                                            <img src={RemisesLitur} alt="" />
                                            <title>Placeholder</title><p>Remises Litur</p>
                                            <div className="card-body">
                                                <p className="card-text">Av. González Lelong 1025, P3600 DGB, Formosa</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-sm">
                                            <img src={RemisesMontecarlo} alt="" />
                                            <title>Placeholder</title><p>Remises Montecarlo</p>
                                            <div className="card-body">
                                                <p className="card-text"> Trinidad González 629, P3600 Formosa</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-sm">
                                            <img src={RemisesNapoleón} alt="" />
                                            <title>Placeholder</title><p>Remises Napoleón</p>
                                            <div className="card-body">
                                                <p className="card-text">Av. Napoleón Uriburu 1645, P3600 DQY, Formosa.</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-sm">
                                            <img src={RemisesNorte} alt="" />
                                            <title>Placeholder</title><p>Remises Norte</p>
                                            <div className="card-body">
                                                <p className="card-text">Pringles 165, P3600 Formosa</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}