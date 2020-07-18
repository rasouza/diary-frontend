import storage from "local-storage";

export const isAuthenticated = () => (storage.get('login') != null) || window.DISABLE_LOGIN