import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-green-800 text-white p-4">
            <aside>
                <p className='flex justify-center items-center'><MdMail size={18} className='mx-1' />: contact@gardenershub.com | <NavLink to='/terms-conditions' className='hover:underline'> Terms & Conditions</NavLink></p>
                <nav className="flex gap-4 md:place-self-center md:justify-self-center">
                    <a href='https://www.facebook.com/groups/largestgardeninggroup/' target='_blank'>
                    <FaFacebook size={20} />
                    </a>
                    <a href='https://www.youtube.com/channel/UC9V_-gqJsZNOy4v_HqbRz3w' target='_blank'>
                    <FaYoutube size={20} />
                    </a>
                    <a href='https://www.instagram.com/gardenflavours/?hl=en' target='_blank'>
                    <FaInstagram size={20} />
                    </a>
                </nav>
            </aside>
        </footer>
    );
};

export default Footer;