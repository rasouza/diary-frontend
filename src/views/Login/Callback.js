import React from 'react';
import { saveJWT } from 'services/auth';

const Callback = props => {
  saveJWT(props.location.hash);
  
  return <div />
}

export default Callback