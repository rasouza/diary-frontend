import React from 'react';
import { saveJWT } from './JWTService';

const Callback = props => {
  saveJWT(props.location.hash);
  
  return <div />
}

export default Callback