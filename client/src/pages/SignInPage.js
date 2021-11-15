import React from 'react'
import './../static/css/signin.css'
import { SocialSignIn } from '../components/SocialSignIn'

export const SignInPage = () => {
    return (
        <>
            <div className='sign-in_block'>
                <h1 className = 'sign-in_header'> Sign In</h1>
                <SocialSignIn/>
            </div>
        </>
    )
}
