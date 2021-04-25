import React from "react";
import { Route } from "react-router-dom";
import { isAuthenticated } from "services/auth";

const PrivateRoute = ({ children, ...props }) => {
  const LOGIN_URL = `${window.IDP_URL}/self-service/login/browser`
  const redirect = () => { window.location = LOGIN_URL }

  return <Route 
    path={props.path} 
    render={() => isAuthenticated() ? children : redirect()} 
    {...props}
    component={isAuthenticated() ? props.component : null}
  />
}

export default PrivateRoute;