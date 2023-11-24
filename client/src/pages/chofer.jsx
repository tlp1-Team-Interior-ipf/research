import React from 'react';
import { Navbar } from '../components/Navbar';
import ChoferView from '../components/ChoferView'
import { Footer } from '../components/Footer';

export const ChoferPage = () => {

    return (
            <>
                <Navbar />
                <ChoferView />
                <Footer />
            </>
    );
};
