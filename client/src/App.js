import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import { NavigationMenu } from './components/NavigationMenu'
import 'materialize-css'
import './static/css/app.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  // const routes = useRoutes(isAuthenticated)
  const routes = useRoutes(true)
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App