"use client"
import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, NextOrObserver, User, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePhoneNumber, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { unsubscribe } from 'diagnostics_channel';

type Props = {
    children: string | JSX.Element | JSX.Element[];
}

export const AuthContext = createContext(null)
const auth: any = getAuth(app)

const GoogleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState<boolean>(true);





    const createUser: object = (email: string, password: string) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn: any = (email: string, password: string) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn: any = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }
    const githubSignIn: any = () => {
        setLoading(true)
        return signInWithPopup(auth, GitHubProvider)
    }

    const updateUserProfile: any = (name: string, picture: string) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: picture
        })
    }

    const logOut: any = () => {
        setLoading(true)
        return signOut(auth)
    }

    const reset_password = (email: string) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            } 
        })
        return unsubscribe
    }, [])

    



    const values: any = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile,
        githubSignIn,
        reset_password
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
