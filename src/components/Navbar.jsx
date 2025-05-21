import React from 'react';
import { NavLink } from 'react-router';
import logoImg from '../assets/garden-logo.png'

const Navbar = () => {
    const links = 
            <>
                <li><NavLink to='/' className={({ isActive }) => isActive ? 
                'underline text-green-800 underline-offset-4 font-semibold' : ''}>Home</NavLink></li>
        
                <li><NavLink to='/explore-gardners' className={({ isActive }) => isActive ? 
                'underline  text-green-800 underline-offset-4 font-semibold' : ''}>Explore Gardners</NavLink></li>

                <li><NavLink to='/browse-tips' className={({ isActive }) => isActive ? 
                'underline  text-green-800 underline-offset-4 font-semibold' : ''}>Browse Tips</NavLink></li>

                <li><NavLink to='/share-tip' className={({ isActive }) => isActive ? 
                'underline  text-green-800 underline-offset-4 font-semibold' : ''}>Share a Garden Tip</NavLink></li>

                <li><NavLink to='/my-tips' className={({ isActive }) => isActive ? 
                'underline  text-green-800 underline-offset-4 font-semibold' : ''}>My Tips</NavLink></li>
            </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
                </div>
                <NavLink to='/' className="flex items-center text-xl"><img className='w-15 rounded-full' src={logoImg} alt="logo" />GardnersHub</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/login' className="btn rounded-full bg-green-700 text-white hover:bg-white hover:text-green-700">Login/Signup</NavLink>
            </div>
        </div>
    );
};

export default Navbar;