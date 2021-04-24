import React from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from 'services/auth'

const Logout = props => {
  logout()

  return <Redirect to="/" />
}

export default Logout