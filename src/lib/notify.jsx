import React from 'react'

export function sendSuccess(message, notifyRef) {
  notifyRef.current.notificationAlert({
    place: 'tr',
    autoDismiss: 5,
    type: 'success',
    icon: 'fa fa-check',
    message
  })
}

export function sendError(errors, notifyRef) {
  const message = (
    <ul>
      {errors.map((error, key) => {
        console.log(`error`, error)
        return <li key={key}>{error}</li>
      })}
    </ul>
  )
  notifyRef.current.notificationAlert({
    place: 'tr',
    autoDismiss: 5,
    type: 'danger',
    icon: 'fas fa-ban',
    message
  })
}
