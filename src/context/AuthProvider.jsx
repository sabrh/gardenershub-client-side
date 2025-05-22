import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase/firebase.init'
import AuthContext from './AuthContext';

export const AuthProvider = ({children}) =>{
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={{user, loading}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;