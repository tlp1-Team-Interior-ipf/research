import React from 'react';
import { Navbar } from '../components/Navbar';
import ChoferView from '../components/ChoferView';
import { Footer } from '../components/Footer';

export const ChoferPage = () => {
    const pageStyle = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    };

    return (
        <div style={pageStyle}>
            <Navbar />
            <ChoferView style={{ flex: 1 }} />
            <Footer />
        </div>
    );
};
