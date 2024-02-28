import React from 'react'

const Alert = ({children, className}) => {
    const alertClass = `text-xl p-4 my-4 bg-gray-400 rounded-md ${className}`
  return (
    <div className={alertClass}>{children}</div>
  )
}

export default Alert