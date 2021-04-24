import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import storage from "local-storage";

export const saveJWT = (hash) => {
  const token = hash.substr(1); // Removes the initial # fragment
  storage.set("jwt", token);

  const client = jwksClient({
    strictSsl: false, // Default value
    jwksUri: window.JWKS_URI,
  });

  client.getSigningKey(window.JWKS_KID, (err, key) => {
    if (err) {
      console.error(err);
      window.location = `${window.USERS_URL}/auth`;
      return;
    }

    const signingKey = key.getPublicKey();
    const decoded = jwt.verify(token, signingKey);

    storage.set("login", decoded);
    window.location = "/";
  });
};

export const parseJWT = token => jwt.verify(token, window.JWT_SECRET)
export const saveAuth = token => { storage.set('login', token) }
export const logout = () => { storage.remove('login') }

export const isAuthenticated = () =>
  storage.get('login') != null || window.DISABLE_LOGIN;
