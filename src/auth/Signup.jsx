import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { auth } from '../firebase/firebase.init';

const Signup = () => {
    const [errorMessage, setErrorMessage]=useState('')
    const navigate = useNavigate()
    const location= useLocation()
    const from = location.state?.from || '/'
    
    const provider = new GoogleAuthProvider()

    const handleGoogleSignin = () =>{
    
    signInWithPopup(auth, provider)
    .then(result =>{
        console.log(result)
        navigate(from, {replace: true})
    })
    .catch(error =>{
        console.log(error)
    })
    }

    const handleSignup = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const photoURL = e.target.photoURL.value
        console.log(name, email, password, photoURL)

        setErrorMessage('')
        // create user firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result)
        })
        .catch(error =>{
            console.log(error)
            setErrorMessage(error.message)
        })
    }

    return (
        <div className="card bg-base-100 max-w-sm mx-auto shrink-0 mt-1">
            <div className="card-body">
            <h1 className="text-3xl font-bold text-green-700">Signup!</h1>
            <form onSubmit={handleSignup} className="fieldset">
                <label className="label">Name</label>
                <input type="text" name="name" className="input" placeholder="Name" />

                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />

                <label className="label">Photo URL</label>
                <input type="text" name="photoURL" className="input" placeholder="Photo URL" />

                <label className="label">Password</label>
                <input type="password" name="password" className="input" placeholder="Password" />
                
                <button className="btn rounded-full bg-green-700 text-white mt-4">Signup</button>
                {
                    errorMessage && <p className='text-red-600'>{errorMessage}</p>
                }
                <p className='text-lg'>Already have an account? <NavLink to='/login' className='text-blue-600 font-bold hover:underline'>Login</NavLink>.</p>
            </form>
            
            <p className='text-center text-gray-500 text-lg'>-- OR --</p>
            <button onClick={handleGoogleSignin} className="btn rounded-full border-green-700"><FcGoogle size={20} />Signin with Google</button>
            </div>
        </div>   
    );
};

export default Signup;