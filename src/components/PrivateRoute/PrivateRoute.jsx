import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import { getUser } from 'api/supabase'

const redirectUnlessLogged = () => (!getUser() ? <Redirect to="/auth" /> : null)
const render = (component) => (getUser() ? component : null)

const PrivateRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={redirectUnlessLogged}
    component={render(component)}
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.elementType
}

export default PrivateRoute
