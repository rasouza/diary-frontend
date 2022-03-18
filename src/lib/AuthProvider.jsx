import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const SupabaseContext = createContext(null)

export function AuthProvider({ children, client }) {
  const profile = JSON.parse(window.localStorage.getItem('user'))

  const github = () =>
    client.auth.signIn(
      { provider: 'github' },
      { redirectTo: `${window.location.origin}/auth/callback` }
    )

  const twitter = () =>
    client.auth.signIn(
      { provider: 'twitter' },
      { redirectTo: `${window.location.origin}/auth` }
    )

  return (
    <SupabaseContext.Provider
      value={{
        github,
        twitter,
        auth: client.auth,
        profile
      }}>
      {children}
    </SupabaseContext.Provider>
  )
}

export const useAuth = () => useContext(SupabaseContext)

AuthProvider.propTypes = {
  children: PropTypes.element,
  client: PropTypes.object
}
