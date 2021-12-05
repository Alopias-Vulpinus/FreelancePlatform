import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import {NavigationMenu} from "./components/NavigationMenu";
import {useAuth} from "./hooks/auth.hook";
import {Routes} from "./routes";

export const ReduxApp = () => {
    useAuth()
    return (
        <>
            <div className='overlay'/>
            <div className='app'>
                <Router>
                    <NavigationMenu/>
                    <div className="container">
                        <Routes />
                    </div>
                </Router>
            </div>
        </>
    )
}