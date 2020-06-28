import jwt from "jsonwebtoken";
import storage from "local-storage";
import jwkToPem from "jwk-to-pem";
import jwks from "jwks";

export const isAuthenticated = () => {  
  try {
    const pem = jwkToPem(jwks);
    const token = storage.get('jwt');

    const decoded = jwt.verify(token, pem);
    storage.set("login", decoded);

    return true;
  } catch (err) {
    console.log(err);

    return false;
  }
}