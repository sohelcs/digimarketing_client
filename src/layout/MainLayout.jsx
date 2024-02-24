import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;