import React from 'react'
import { Redirect } from 'react-router-dom'
import { useAuth } from 'lib/AuthProvider'
import { useFeature } from '@growthbook/growthbook-react'

export const withAuth =
  (Component) =>
  ({ ...props }) => {
    const { auth } = useAuth()
    const user = auth.user()
    const login = useFeature('enable-login')

    if (login.on && !user) return <Redirect to="/auth" />

    return <Component {...props} />
  }
