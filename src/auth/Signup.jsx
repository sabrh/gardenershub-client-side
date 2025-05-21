import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router';

const Signup = () => {
    return (
        <div className="card bg-base-100 max-w-sm mx-auto shrink-0 mt-1">
            <div className="card-body">
            <h1 className="text-3xl font-bold text-green-700">Signup!</h1>
            <form className="fieldset">
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Name" />

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Photo URL</label>
                <input type="text" className="input" placeholder="Photo URL" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                
                <button className="btn rounded-full bg-green-700 text-white mt-4">Signup</button>
                <p className='text-lg'>Already have an account? <NavLink to='/login' className='text-blue-600 font-bold hover:underline'>Login</NavLink>.</p>
            </form>
            <p className='text-center text-gray-500 text-lg'>-- OR --</p>
            <button className="btn rounded-full border-green-700"><FcGoogle />Sigin with Google</button>
            </div>
        </div>   
    );
};

export default Signup;