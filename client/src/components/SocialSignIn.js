import React from 'react'

import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import VkLogin from 'react-vkontakte-login'
import { GoogleLoginButton, FacebookLoginButton, createButton} from "react-social-login-buttons"
import { useSocials } from '../hooks/social.hook'

export const SocialSignIn = () => {
    const {responseGoogle, responseFacebook, responseVkontakte } = useSocials()
    const VKLoginButton = createButton({
        text: "Log in with VKontakte",
        icon: 'vk',
        iconFormat: name => `fa fa-${name}`,
        style: { background: "#009acd" },
        activeStyle: { background: "#293e69" }
    })
    return (
        <>
            <GoogleLogin
                clientId='104530488969-4nd2u0g1msl9ise30qms1ie2i559a2kj.apps.googleusercontent.com'
                render={(renderProps)=><GoogleLoginButton onClick={renderProps.onClick}/>}
                onSuccess={responseGoogle}
                cookiePolicy={'single_host_origin'}/>
            <FacebookLogin
                appId="604442857421448"
                render={(renderProps)=><FacebookLoginButton onClick={renderProps.onClick}/>}
                callback={responseFacebook}/>
            <VkLogin
                apiId="8000938"
                callback={responseVkontakte}
                render={(renderProps) => <VKLoginButton onClick={renderProps.onClick}/>}/>
        </>
    )
}