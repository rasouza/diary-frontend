const SUPABASE_KEY = 'supabase.auth.token'

export const getToken = () => {
  const session = window.localStorage.getItem(SUPABASE_KEY)
  console.log('session', session)
  const {
    currentSession: { access_token: token }
  } = JSON.parse(window.localStorage.getItem(SUPABASE_KEY))

  return token
}
