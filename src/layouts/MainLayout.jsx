import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <header><Navbar /></header>
            <main>
                <div className='min-h-[calc(100vh-145px)] mx-8 md:mx-16'>
                <Outlet></Outlet>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;