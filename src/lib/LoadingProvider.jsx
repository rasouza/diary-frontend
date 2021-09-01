import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const LoadingContext = createContext(null)

export function LoadingProvider({ loading, children }) {
  const [isLoading, setLoading] = useState(loading)

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoading = () => useContext(LoadingContext)

LoadingProvider.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.element
}
