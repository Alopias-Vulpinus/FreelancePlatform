import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { AboutUsPage } from './pages/AboutUsPage'
import { ChatListPage } from './pages/ChatListPage'
import { ChatPage } from './pages/ChatPage'
import { CustomersPage } from './pages/CustomersPage'
import { HomePage } from './pages/HomePage'
import { OpenTasksPage } from './pages/OpenTasksPage'
import { PerformersPage } from './pages/PerformersPage'
import { ProfilePage } from './pages/ProfilePage'
import { SignInPage } from './pages/SignInPage'
import { TaskDashboardPage } from './pages/TaskDashboardPage'
import { WorkingTasksPage } from './pages/WorkingTasksPage'

export const useRoutes = isAuthenticated => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage/>
      </Route>
      <Route path="/login" exact>
        <SignInPage />
      </Route>
      <Route path="/profile" exact>
        <ProfilePage />
      </Route>
      <Route path="/customers" exact>
        <CustomersPage />
      </Route>
      <Route path="/performers" exact>
        <PerformersPage />
      </Route>
      <Route path="/about-us" exact>
        <AboutUsPage />
      </Route>
      <Route path="/chats" exact>
        <ChatListPage />
      </Route>
      <Route path="/open-tasks" exact>
        <OpenTasksPage />
      </Route>
      <Route path="/task-dashboard">
        <TaskDashboardPage />
      </Route>
      <Route path="/working-tasks" exact>
        <WorkingTasksPage />
      </Route>

      <Route path="/chatqwe" >
        <ChatPage />
      </Route>

      <Redirect to="/" />
    </Switch>
  )
}
