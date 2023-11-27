import React from 'react';
import { Navbar } from '../components/Navbar.jsx';
import PasajeroView from '../components/PasajeroView.jsx'; // Importa tu componente de la vista del pasajero
import { Footer } from '../components/Footer';

export const PasajeroPage = () => {

    return (
            <>
                <Navbar />
                <PasajeroView />
                <Footer />
            </>
    );
};
