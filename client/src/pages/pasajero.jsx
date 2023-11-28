import React from 'react';
import { Navbar } from '../components/Navbar.jsx';
import PasajeroView from '../components/PasajeroView.jsx';
import { Footer } from '../components/Footer';

export const PasajeroPage = () => {
    const pageStyle = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Garantiza que el contenedor ocupe al menos el 100% de la altura de la ventana
    };

    return (
        <div style={pageStyle}>
            <Navbar />
            <PasajeroView style={{ flex: 1 }} /> {/* Establece flex: 1 para que ocupe el espacio restante */}
            <Footer />
        </div>
    );
};
