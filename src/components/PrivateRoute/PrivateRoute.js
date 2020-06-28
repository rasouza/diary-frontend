import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = ({ children, ...props }) => {
  const isAuthenticated = false; // Mock
  const redirect = () => window.location = `${process.env.REACT_APP_USERS_URL}/auth`;

  return <Route 
    path={props.path} 
    key={props.key}
    { ...( isAuthenticated && { component: props.component } ) }
    render={() => isAuthenticated ? children : redirect()} 
  />
}

export default PrivateRoute;