import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import {NavigationMenu} from "./components/NavigationMenu";
import {Routes} from "./routes";
import {useAuth} from "./hooks/auth.hook";

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