import React from 'react'
import {Redirect} from "react-router-dom";
import {selectAuth} from "../../redux/reducers/userReducer";
import {useSelector} from "react-redux";

export const WithAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {
        const isAuth = useSelector(selectAuth())
        if(!isAuth){
            return <Redirect to='/login'/>
        }
        return <Component {...props}/>
    }

    return RedirectComponent
}