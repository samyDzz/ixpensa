/* eslint-disable multiline-ternary */
import React from 'react'
import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import { useUserStore } from '../../stores/Auth.store'

const PublicRoute = ({ children }) => {
  const { user } = useUserStore()
  const location = useLocation()

  // const isLoged = user ? true : false;
  return !user ? (
    children
  ) : (
    <Navigate to={'/home'} replace state={{ path: location.pathname }} />
  )
}

PublicRoute.propTypes = {
  children: PropTypes.element
}

export default PublicRoute
