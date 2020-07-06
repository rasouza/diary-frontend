import React from 'react';
import { Redirect } from 'react-router-dom';
import { saveJWT } from './JWTService';

const Callback = props => {
  saveJWT(props.location.hash);
  
  return <Redirect to="/" />
}

export default Callback