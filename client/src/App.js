import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import {Navbar} from './components/Navbar'
import {Loader} from './components/Loader'

import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import VkLogin from 'react-vkontakte-login'
import 'materialize-css'

function App() {
  const {token, login, logout, userId, ready} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if (!ready) {
    return <Loader />
  }

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
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        {/* !isAuthenticated && <Navbar />*/}
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
