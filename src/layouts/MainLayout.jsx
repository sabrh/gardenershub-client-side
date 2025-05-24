import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Switcher from '../Switcher';

const MainLayout = () => {
    return (
        <div>
            <header><Navbar /></header>
            <main className='bg-base-100 text-black dark:bg-gray-800 dark:text-white'>
                <Switcher />
                <div className='min-h-[calc(100vh-145px)] mx-8 md:mx-16'>
                <Outlet></Outlet>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;