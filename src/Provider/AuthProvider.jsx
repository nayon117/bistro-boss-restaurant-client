import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login 
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    // logout 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // update profile 
    const handleUpdateProfile = (name,photo) => {
       return  updateProfile(auth.currentUser, {
            displayName: name , photoURL: photo
          }) 
    }


    // observer 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
          return unSubscribe()
        }
    },[])

    
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleLogin,
        logOut,
        handleUpdateProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
};

export default AuthProvider;