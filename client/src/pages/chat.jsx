import React from 'react';
import { Navbar } from '../components/Navbar';
import { ChatComponent } from '../components/ChatComponent';
import { Footer } from '../components/Footer';

export const ChatPage = () => {

    return (
            <>
                <Navbar />
                <ChatComponent />
                <Footer />
            </>
    );
};
