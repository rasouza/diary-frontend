import React from "react";
import { Route } from "react-router-dom";
import { isAuthenticated } from "services/AuthService";

const PrivateRoute = ({ children, ...props }) => {
  const auth = isAuthenticated();
  const redirect = () => window.location = `${process.env.REACT_APP_USERS_URL}/auth`;

  return <Route 
    path={props.path} 
    key={props.key}
    { ...( auth && { component: props.component } ) }
    render={() => auth ? children : redirect()} 
  />
}

export default PrivateRoute;