import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { SignInPage } from './pages/SignInPage'

export const useRoutes = isAuthenticated => {
  return (
    <Switch>
      <Route path="/" exact>
        <SignInPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
