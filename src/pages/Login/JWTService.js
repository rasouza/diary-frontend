import jwt from "jsonwebtoken";
import storage from 'localforage';


const saveJWT = async (hash) => {
  const token = hash.substr(1);
  const decoded = jwt.decode(token);

  try {
    await storage.setItem('jwt', token)
    await storage.setItem('login', decoded)
  } 
  catch (err) {
    console.log(err);
  }
}