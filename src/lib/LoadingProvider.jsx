import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import LoadingOverlay from 'react-loading-overlay'

const LoadingContext = createContext(null)

export function LoadingProvider({ children }) {
  const [isLoading, setLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      <LoadingOverlay active={isLoading} spinner>
        {children}
      </LoadingOverlay>
    </LoadingContext.Provider>
  )
}

export const useLoading = () => useContext(LoadingContext)

LoadingProvider.propTypes = {
  children: PropTypes.element
}
