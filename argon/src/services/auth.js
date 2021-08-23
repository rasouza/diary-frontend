import jwt from "jsonwebtoken";
import storage from "local-storage";

export const logout = () => { storage.remove('login') }
export const saveAuth = token => { storage.set('login', token) }

export const getLogin = () => {
  if (window.DISABLE_LOGIN) {
    return {
      id: '1',
      email: 'snow@john.com',
      name: 'John Snow',
      picture: '/avatar.jpg'
    }
  }
  const token = storage.get('login')
  return jwt.verify(token, window.JWT_SECRET)
}

export const isAuthenticated = () =>
  storage.get('login') != null || window.DISABLE_LOGIN;
