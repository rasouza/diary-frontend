import { createClient } from '@supabase/supabase-js'

const db = createClient('teste', 'teste')

const dummyUser = {
  full_name: 'Ryan Gosling',
  avatar_url: `${process.env.PUBLIC_URL}/img/ryan.jpg`,
  user_name: 'ryan'
}

export function getUser() {
  if (window.ENABLE_LOGIN === false) {
    return dummyUser
  }

  const user = db.auth.user()
  if (user) return { ...user.user_metadata, email: user.email }

  return null
}

export function signOut() {
  return db.auth.signOut()
}

export function getToken() {
  return db.auth.session().access_token
}
