import React from 'react';
import Navbar from '../components/Navbar';

const ErrorPage = () => {
    return (
        <div>
            <Navbar />
            <p className='text-3xl text-center mt-20'>404 Error!</p>
            <p className='text-lg text-center'>Looks like this page does not exist.</p>
        </div>
    );
};

export default ErrorPage;