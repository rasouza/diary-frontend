import React, { useEffect } from 'react'
import { useFeature } from '@growthbook/growthbook-react'
import { useHistory } from 'react-router-dom'

import LoadingOverlay from 'react-loading-overlay'

import { useAuth } from 'lib/AuthProvider'
import config from 'config'

export function Callback() {
  const { auth } = useAuth()
  const history = useHistory()
  const login = useFeature('enable-login')
  const user = auth.user()

  useEffect(() => {
    if (login.value !== null && login.off) {
      window.localStorage.setItem('user', JSON.stringify(config.dummyUser))
      history.push('/')
    }

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

  return <LoadingOverlay active spinner />
}
