import storage from 'local-storage';

export const saveJWT = (hash) => {
  const token = hash.substr(1);

  try {
    storage.set('jwt', token)
  } 
  catch (err) {
    console.log(err);
  }
}