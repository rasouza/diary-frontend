import React, { useEffect } from 'react'
import { useFeature } from '@growthbook/growthbook-react'
import LoadingOverlay from 'react-loading-overlay'

import { useAuth } from 'lib/AuthProvider'
import config from 'config'
import { useHistory } from 'react-router-dom'

export function Callback() {
  const { auth } = useAuth()
  const history = useHistory()
  const login = useFeature('enable-login')
  const { dummyUser } = config
  const user = auth.user()

  if (login.value && login.off) {
    window.localStorage.setItem('user', JSON.stringify(dummyUser))
    history.push('/')
  }

  useEffect(() => {
    if (user) {
      const {
        user_metadata: {
          avatar_url: avatar,
          full_name: name,
          user_name: username,
          email
        }
      } = user
      window.localStorage.setItem(
        'user',
        JSON.stringify({ avatar, name, email, username })
      )

      history.push('/')
    }
  }, [user])

  // TODO: Render Loading spinner
  return <LoadingOverlay active spinner />
}
