import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { AboutUsPage } from './components/pages/AboutUsPage'
import { CreateTaskPageWithAuthRedirect as CreateTaskPage } from './components/pages/CreateTaskPage'
import { CustomersPageWithAuthRedirect as CustomersPage } from './components/pages/CustomersPage'
import { HomePage } from './components/pages/HomePage'
import { OpenTasksPageWithAuthRedirect as OpenTasksPage } from './components/pages/OpenTasksPage'
import { PerformersPageWithAuthRedirect as PerformersPage } from './components/pages/PerformersPage'
import { ProfilePageWithAuthRedirect as ProfilePage } from './components/pages/ProfilePage'
import { SignInPage } from './components/pages/SignInPage'
import { TaskDashboardPageWithAuthRedirect as TaskDashboardPage } from './components/pages/TaskDashboardPage'
import { WorkingTasksPageWithAuthRedirect as WorkingTasksPage } from './components/pages/WorkingTasksPage'

export const Routes = () => {
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
      <Route path="/open-tasks" exact>
        <OpenTasksPage />
      </Route>
      <Route path="/task-dashboard">
        <TaskDashboardPage />
      </Route>
      <Route path="/working-tasks" exact>
        <WorkingTasksPage />
      </Route>
      <Route path="/create-task" >
        <CreateTaskPage />
      </Route>
    </Switch>
  )
}
