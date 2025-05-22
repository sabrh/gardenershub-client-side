import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { auth } from '../firebase/firebase.init';

const Login = () => {
  const [success, setSuccess]=useState(false)
  const [errorMessage, setErrorMessage]=useState('')

  const emailRef=useRef()

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

  const handleLogin = e =>{
    e.preventDefault()

    const email=e.target.email.value
    const password=e.target.password.value

    setSuccess(false)
    setErrorMessage('')
    // login user firebase
    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      setSuccess(true);
      navigate(from, { replace: true });
    })
    .catch(error =>{
      console.log(error)
      setErrorMessage(error.message)
    })
  }

  const handleForgetPassword = () =>{
    const email=emailRef.current.value

    setErrorMessage('')

    // send password reset mail
    sendPasswordResetEmail(auth, email)
    .then(() =>{
      alert('A password reset email has been sent. Please check your email.')
    })
    .catch(error =>{
      setErrorMessage(error.message)
    })
  }

    return (
        <div className="card bg-base-100 max-w-sm mx-auto shrink-0 mt-2">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-green-700">Login now!</h1>
            <form onSubmit={handleLogin}>
              <label className="label">Email</label>
              <input type="email" name="email" ref={emailRef} className="input" placeholder="Email" />

              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />

              <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>
              <button className="btn rounded-full bg-green-700 text-white mt-4">Login</button>
              {
                  errorMessage && <p className='text-red-600'>{errorMessage}</p>
              }
              {
                  success && <p className='text-green-600'>LoggedIn!</p>
              }
              <p className='text-lg'>Don't have an account? <NavLink to='/signup' className='text-blue-600 font-bold hover:underline'>Signup</NavLink> here.</p>
            </form>
            <p className='text-center text-gray-500 text-lg'>-- OR --</p>
            <button onClick={handleGoogleSignin} className="btn rounded-full border-green-700"><FcGoogle size={20} />Signin with Google</button>
          </div>
        </div>   
    );
};

export default Login;