import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
const user = {displayName: null}

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

const signUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

const authInfo = {
    user,
    createUser,
    signUser,
}

    return (
        <AuthContext.Provider value={authInfo}>
          {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;