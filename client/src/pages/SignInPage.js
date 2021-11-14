import React from 'react'

import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import VkLogin from 'react-vkontakte-login'

export const SignInPage = () => {

    const responseGoogle = (response) => {
        console.log('Google creds');
        console.log(response);
        console.log(response.profileObj);
    }
    
    const responseFacebook = (response) => {
        console.log('Facebook creds');
        console.log(response);
        console.log(response.profileObj);
    }
    
    const responseVk = response => {
        console.log('Facebook creds');
        console.log(response);
    }

    return (
        <>
            <GoogleLogin
                clientId='104530488969-4nd2u0g1msl9ise30qms1ie2i559a2kj.apps.googleusercontent.com'
                buttonText='Login with Google'
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}/>
            <FacebookLogin
                appId="604442857421448"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}/>
            <VkLogin
                apiId="8000938"
                callback={responseVk}
                render={renderProps => (
                    <button onClick={renderProps.onClick}>
                        <img src="https://img.icons8.com/color/48/000000/vk-circled.png"/> </button>
                )}/>
        </>
    )
}
