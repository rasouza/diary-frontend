import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { saveJWT } from './JWTService';

const Callback = props => {
  useEffect(() => { saveJWT(props.location.hash); }, [props.location.hash])
  return <Redirect to="/" />
}

export default Callback