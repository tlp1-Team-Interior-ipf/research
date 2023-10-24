import mapaSVG from '../assets/formosa.svg'
import { NavBar } from './navbar'
export const Mapa = () => {

    return (


        <>

            <NavBar />

            <div style={{height:'350px'}}>
                <span className="input-group-text">Origen</span>
                <span className="input-group-text">Destino</span>
                
                    <picture style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center', position: 'relative', top: '-70px' }}>
                        <img src={mapaSVG} alt="" />
                    </picture>
                
            </div>

        </>
    )
}