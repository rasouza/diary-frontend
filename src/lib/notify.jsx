import React from 'react'

export function sendSuccess(message) {
  return {
    place: 'tr',
    autoDismiss: 5,
    type: 'success',
    icon: 'fa fa-check',
    message
  }
}

export function sendError(errors) {
  console.log(`errors`, errors)
  const message = (
    <ul>
      {errors.map((error, key) => {
        console.log(`error`, error)
        return <li key={key}>{error}</li>
      })}
    </ul>
  )
  console.log(`message`, message)
  return {
    place: 'tr',
    autoDismiss: 5,
    type: 'danger',
    icon: 'fas fa-ban',
    message
  }
}
