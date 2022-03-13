import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { useFeature } from '@growthbook/growthbook-react'
import config from 'config'

const SupabaseContext = createContext(null)

export function AuthProvider({ children, client }) {
  const { dummyUser } = config
  const login = useFeature('enable-login')

  let user = null
  if (login.value && login.off) {
    user = dummyUser
  } else if (client?.auth.user()) {
    const { user_metadata: userMetadata, email } = client.auth.user()
    user = { ...userMetadata, email: email }
  }

  const github = () =>
    client.auth.signIn(
      { provider: 'github' },
      { redirectTo: `${window.location.origin}/auth` }
    )

  const twitter = () =>
    client.auth.signIn(
      { provider: 'twitter' },
      { redirectTo: `${window.location.origin}/auth` }
    )

  return (
    <SupabaseContext.Provider value={{ github, twitter, user }}>
      {children}
    </SupabaseContext.Provider>
  )
}

export const useAuth = () => useContext(SupabaseContext)

AuthProvider.propTypes = {
  children: PropTypes.element,
  client: PropTypes.any
}
