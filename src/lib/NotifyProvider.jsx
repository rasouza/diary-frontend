import React from 'react'
import PropTypes from 'prop-types'
import NotificationAlert from 'react-notification-alert'

const NotifyContext = React.createContext(null)

const error = {
  place: 'tr',
  autoDismiss: 5,
  type: 'danger',
  icon: 'fas fa-ban'
}

const success = {
  place: 'tr',
  autoDismiss: 5,
  type: 'success',
  icon: 'fa fa-check'
}

export function NotifyProvider({ children }) {
  const notify = React.useRef(null)

  const notifyError = (message) =>
    notify.current.notificationAlert({ ...error, message })
  const notifySuccess = (message) =>
    notify.current.notificationAlert({ ...success, message })

  return (
    <NotifyContext.Provider value={{ notifyError, notifySuccess }}>
      <NotificationAlert ref={notify} />
      {children}
    </NotifyContext.Provider>
  )
}

export const useNotify = () => React.useContext(NotifyContext)

NotifyProvider.propTypes = {
  children: PropTypes.element
}
