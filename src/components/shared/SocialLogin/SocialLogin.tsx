"use client" 
import useAuth from '@/hooks/useAuth';
import React from 'react';

const SocialLogin = () => {
    const { googleSignIn, githubSignIn }: any = useAuth()
    const handleGoogleLogin = ()=> {
        googleSignIn()
        .then((result: any) => {
            const user = result.user;
            console.log(user);
        })
    }

    const handleGithubLogin = () => {
        githubSignIn()
        .then((result: any) => {
            const user = result.user;
            console.log(user);
        })
    }

    return (
        <div>
            <button onClick={handleGoogleLogin} className=' border border-blue-600 mr-3 rounded-lg px-6 py-3'>Continue With Google</button>
            <button onClick={handleGithubLogin} className=' border border-gray-600  rounded-lg px-6 py-3'>Continue With Google</button>
        </div>
    );
};

export default SocialLogin;