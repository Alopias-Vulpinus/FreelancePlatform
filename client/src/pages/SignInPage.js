import React from 'react'
import './../static/css/signin.css'
import { SocialSignIn } from '../components/SocialSignIn'

export const SignInPage = () => {
    return (
        <>
            <div className='sign-in-block'>
                <h1 className = 'sign-in-header'> Sign In</h1>
                
                <SocialSignIn/>
            </div>
        </>
    )
}
