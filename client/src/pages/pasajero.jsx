import { Nav } from '../components/Nav';
import PasajeroView from '../components/PasajeroView'; // Importa tu componente de la vista del pasajero
import { Footer } from '../components/Footer';

export const PasajeroPage = () => {
    return (
        <>
            <Nav />
            <PasajeroView />
            <Footer />
        </>
    );
};