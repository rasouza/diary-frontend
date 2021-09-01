import React from 'react'
import PropTypes from 'prop-types'
import NotificationAlert from 'react-notification-alert'

const NotifyContext = React.createContext(null)

export function NotifyProvider({ children }) {
  const notifyRef = React.useRef(null)
  return (
    <NotifyContext.Provider value={{ notify: notifyRef }}>
      <NotificationAlert ref={notifyRef} />
      {children}
    </NotifyContext.Provider>
  )
}

export const useNotify = () => React.useContext(NotifyContext)

NotifyProvider.propTypes = {
  children: PropTypes.element
}
