import React from 'react'
import { Redirect, Route } from 'react-router'
import { getUser } from 'services/supabase'

const redirectUnlessLogged = () => (!getUser()) ? <Redirect to="/auth" /> : null
const render = component => getUser() ? component : null

const PrivateRoute = ({component, ...rest}) => {
  return (
    <Route {...rest} render={redirectUnlessLogged} component={render(component)}/>
  )
}

export default PrivateRoute