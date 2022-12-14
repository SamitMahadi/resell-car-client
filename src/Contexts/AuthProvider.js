import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword,onAuthStateChanged,signOut,updateProfile,signInWithPopup} from 'firebase/auth'
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const providerLogin=provider=>{
        return signInWithPopup(auth,provider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observing');
            setUser(currentUser)
            setLoading(false)

        })
        return () => unsubscribe()
    }, [])

    const authInfo = {
        createUser,
        signIn,
        logOut,
        user,
        updateUser,
        loading,
        providerLogin
        
    }

    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;