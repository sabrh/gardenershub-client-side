import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import logoImg from '../assets/garden-logo.png'
import { AuthContext } from '../context/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const Navbar = () => {
    const location=useLocation()
    const {user}=useContext(AuthContext)
    
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const handleLogout= () => {
        signOut(auth)
        .then(() => {
            console.log('User logged out')
        })
        .catch(err => console.error(err))

        setDropdownOpen(false)
    }

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
            
           <div className="navbar-end relative">
                {!user ? (
                <NavLink to="/login" state={{ from: location.pathname }} className="btn rounded-full bg-green-700 text-white hover:bg-white hover:text-green-700">
                Login/Signup</NavLink>
                ) : (
                <div className="relative cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}
                    onMouseLeave={() => setDropdownOpen(false)}>
                    <img className="w-12 h-12 rounded-full border" src={user?.photoURL}
                    alt="User" title={user?.displayName} />
                    {dropdownOpen && (
                    <div className="absolute top-12 right-0 bg-white border rounded shadow p-2">
                        <p className="font-semibold mb-2">{user.displayName}</p>
                        <button onClick={handleLogout} className="btn btn-sm bg-red-600 text-white w-full">Logout
                        </button>
                    </div>
                    )}
                </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;