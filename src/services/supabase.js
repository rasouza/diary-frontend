import { createClient } from '@supabase/supabase-js'

const db = createClient(window.SUPABASE_URL, window.SUPABASE_KEY)

const dummyUser = {
  user_metadata: {
    full_name: 'Ryan Gosling',
    avatar_url: `${process.env.PUBLIC_URL}/img/ryan.jpg`
  }
}

export function getUser() {
  if (window.ENABLE_LOGIN === false) {
    return dummyUser
  }

  return db.auth.user()
}

export function githubSignIn() {
  return db.auth.signIn({provider: 'github'})
}

export function twitterSignIn() {
  return db.auth.signIn({provider: 'twitter'})
}