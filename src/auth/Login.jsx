import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router';

const Login = () => {
    return (
        <div className="card bg-base-100 max-w-sm mx-auto shrink-0 mt-2">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-green-700">Login now!</h1>
            <form className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn rounded-full bg-green-700 text-white mt-4">Login</button>
              <p className='text-lg'>Don't have an account? <NavLink to='/signup' className='text-blue-600 font-bold hover:underline'>Signup</NavLink> here.</p>
            </form>
            <p className='text-center text-gray-500 text-lg'>-- OR --</p>
            <button className="btn rounded-full border-green-700"><FcGoogle />Sigin with Google</button>
          </div>
        </div>   
    );
};

export default Login;