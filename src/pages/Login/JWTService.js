import jwt from "jsonwebtoken";

export const parseJWT = (hash) => {
  return jwt.decode(hash.substr(1));
};