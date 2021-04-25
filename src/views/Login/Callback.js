import React from 'react';
import { Redirect } from 'react-router-dom';
import { saveAuth } from 'services/auth'

const Callback = props => {
  const getQuerystring = (name) => (new URLSearchParams(window.location.search)).get(name);
  saveAuth(getQuerystring('login'))

  return <Redirect to="/admin" />
}

export default Callback