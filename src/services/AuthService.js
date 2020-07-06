import jwt from "jsonwebtoken";
import storage from "local-storage";
import jwkToPem from "jwk-to-pem";

export const isAuthenticated = () => {  
  try {
    const pem = jwkToPem(window.JWKS);
    const token = storage.get('jwt');

    const decoded = jwt.verify(token, pem);
    storage.set("login", decoded);

    return true;
  } catch (err) {
    console.log(err);

    return false;
  }
}
