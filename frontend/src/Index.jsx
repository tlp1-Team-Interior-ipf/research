import taxi from '../src/assets/taxi.svg'
import { NavBar } from './components/navbar'
import { Footer } from './components/footer'


export const Index = () => {

    return (

        <>
        <NavBar/>

            <main >
                <div>
                    <picture className='d-flex justify-content-center'>
                        <img className="img-fluid" src={taxi} alt="Imagen de taxi" style={{width:'100px'}}/>
                    </picture>

                    <div className="text-warning text-center">
                        <h1 className="display-1">tuRemo</h1>
                        <h3 className="display-6">¿Necesitas un remis?</h3>


                        
                        <a className="btn btn-warning text-light" href="/empresa" type="button">Pedir Aquí</a>
                    </div>
                </div>
            </main>

        <Footer/>
        </>

    )
}