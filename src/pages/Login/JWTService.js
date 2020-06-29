import storage from 'local-storage';

export const saveJWT = (hash) => {
  const token = hash.substr(1); // Removes the initial # fragment
  storage.set('jwt', token)
}
