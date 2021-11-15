import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import { NavigationMenu } from './components/NavigationMenu'
import 'materialize-css'
import './static/css/app.css'

function App() {
  // const {token, login, logout, userId, ready} = useAuth()
  // const isAuthenticated = !!token
  // const routes = useRoutes(isAuthenticated)
  const routes = useRoutes(true)
  // if (!ready) {
  //   return <Loader />
  // }
  return (
    <>
    <div className='overlay'/>
    <div className='app'>
      <Router>
        {/* !isAuthenticated && <Navbar />*/}
        <NavigationMenu />
        <div className="container">
          {routes}
        </div>
      </Router>
    </div>
    </>
  )
}

export default App