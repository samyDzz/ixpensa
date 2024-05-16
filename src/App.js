import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Forgot from './pages/Forgot'
import Signup from './pages/Signup/Signup'
import NotFound from './pages/NotFound'
import VerifyUrEmail from './pages/VerifyUrEmail'

import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'

import PrivateRoute from './components/Auth/PrivateRoute'
import PublicRoute from './components/Auth/PublicRoute'
import Charts from './pages/Charts'
import Settings from './pages/Settings/Settings'
import Profile from './pages/Settings/TabSettings/Profile'
import Password from './pages/Settings/TabSettings/Password'
import EmailNotification from './pages/Settings/TabSettings/EmailNotification'
import Languages from './pages/Settings/TabSettings/Languages'
import Account from './pages/Settings/Account'
import Billing from './pages/Settings/Billing'
import ReferFriend from './pages/Settings/ReferFriend'
import LastUpdate from './pages/Settings/LastUpdate'
import HelpSupport from './pages/Settings/HelpSupport'

function App() {
  return (
    <Routes>
      {/* PRIVATE ROUTES */}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/charts"
        element={
          <PrivateRoute>
            <Charts />
          </PrivateRoute>
        }
      />
      {/* routes of settings */}
      <Route path={'/settings'} element={<Settings />}>
        {/* routes of account */}
        <Route path={'account'} element={<Account />}>
          <Route path={''} index element={<Profile />} />
          <Route path={'profile'} index element={<Profile />} />
          <Route path={'password'} element={<Password />} />
          <Route path={'language'} element={<Languages />} />
          <Route path={'emailNotification'} element={<EmailNotification />} />
        </Route>
        <Route path={'billing'} element={<Billing />} />
        <Route path={'lastUpdate'} element={<LastUpdate />} />
        <Route path={'Help'} element={<HelpSupport />} />
        <Route path={'Refer'} element={<ReferFriend />} />
      </Route>
      {/* PUBLIC ROUTES */}
      <Route
        path="/"
        element={
          <PublicRoute>
            <LandingPage />
          </PublicRoute>
        }
      />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/VerifyEmail" element={<VerifyUrEmail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
