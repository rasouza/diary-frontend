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


// ID Token
// eyJhbGciOiJSUzI1NiIsImtpZCI6InB1YmxpYzo2MGRmZGJlYS1kZmNjLTQwYTktYWI3ZC1mZTNkMGZmNzRmOWIiLCJ0eXAiOiJKV1QifQ.eyJhdF9oYXNoIjoiRTRiY1JHM0FGaFNhSnZZMFdZRXBmdyIsImF1ZCI6WyJkaWFyeS11c2VycyJdLCJhdXRoX3RpbWUiOjE1OTMzNjgxNTcsImV4cCI6MTU5MzM3MTc1OCwiaWF0IjoxNTkzMzY4MTU4LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjQ0NDQvIiwianRpIjoiNmUzYzM3MjYtNjJkNS00M2Q2LWI5ZWMtNTlmOTA5N2MwNjI5Iiwibm9uY2UiOiIiLCJyYXQiOjE1OTMzNjczNDIsInNpZCI6IjkzYjYzNDI5LTg4NGUtNGYyOC05Njc2LWFhY2E5NzRmYWU0OSIsInN1YiI6InJhc291emEifQ.CaQX5A7537iyzf2dDMJmcMIuoGCaaAZihdqRwuimIyljWns1oMuCzZayTKWVn74mx22gNbgTXWedd_vaAuSBgAi3XoZHDEIH4T2KNW4JTV_Ov2FbkHdUBe88gD9Eqi7sUOsq50wiS7VQOUk0mbNoBeHxXFcCtXWXXZe1Bik8NR3NUo-lntmVD5hZPFjIHgyTe89EvzF6ahFZCQ0unGC7m2PP6UOmWzMOSPu9PpSU62rjy4fdm4suhIkBmvMNy8porQzMycCHb4lr8a9hOomZtravuFvg-E_i9DyHrbbM8FvxiFuHWMjrQCt2PlN_1jJwywir4wmFFuoVx-Qta3UQiIVzZz-UenNYY3t0q_W6GT5VXMSy20ynMfasUrn9gioe-dJYZ0HZ84sqsf-Q0AWH7v4cTVReLlbXA2It-Kbalk3BIH-B7OrGUFl92sGtRziyX_o99x9_vaPLigp9s26NImlxDcw85JWr57hEagFJfMnmlW6yQzeT9nWm2pw-zpCUsV-EU3xphlzPH6Px5JcNKRX08b0wnU3m0swmTkZ7zyXlzbrt7ogXVaR8I-qqTSJqn9KgDm_7Zx8oxluTTcpMND_M-1Y27OBwbJhxZXMOkMTPCALNI2Rm2ng5U2AVEfMp_F-ByvjSjhSLHJp8GttenVdInrSOMBVHwJ_6G5vd47k