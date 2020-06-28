import React from 'react';
import { Redirect } from 'react-router-dom';
import { parseJWT } from './JWTService';

const Callback = props => {

  return <div>
    {console.log(parseJWT(props.location.hash))}
  </div>
}

export default Callback