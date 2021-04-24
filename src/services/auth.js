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

export const isAuthenticated = () =>
  storage.get("login") != null || window.DISABLE_LOGIN;
