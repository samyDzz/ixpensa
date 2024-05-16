/* eslint-disable multiline-ternary */
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

import { useUserStore } from '../../stores/Auth.store'

const PrivateRoute = ({ children }) => {
  const { user } = useUserStore()
  const location = useLocation()
  // const isLoged = user ? true : false;

  return user ? (
    children
  ) : (
    <Navigate to={'/login'} replace state={{ path: location.pathname }} />
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.element
}

export default PrivateRoute
