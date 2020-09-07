import React from "react";
import { Route } from "react-router-dom";
import { isAuthenticated } from "services/auth";

const PrivateRoute = ({ children, ...props }) => {
  const auth = isAuthenticated();
  const redirect = () => (window.location = `${window.USERS_URL}/auth`);

  return <Route 
    path={props.path} 
    render={() => auth ? children : redirect()} 
    {...props}
  />
}

export default PrivateRoute;