import React from 'react'

const WithContainer = ({ children }) => {
  return (
    <div className="container mx-auto">{children}</div>
  )
}

export default WithContainer
