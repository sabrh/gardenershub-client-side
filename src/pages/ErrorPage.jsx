import React from 'react';
import Navbar from '../components/Navbar';
import Lottie from 'lottie-react';
import error404 from '../assets/animations/error404.json';

const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center">
                <Lottie animationData={error404} className="w-96" />
                <h2 className="text-2xl font-bold mt-4">Page not found</h2>
            </div>
        </>
    );
};

export default ErrorPage;