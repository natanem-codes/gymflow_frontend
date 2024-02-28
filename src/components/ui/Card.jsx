import React from 'react'

const Card = ({children, className}) => {
    const cardClass = `rounded-md shadow-lg flex flex-col ${className}`
  return (
    <div className={cardClass}>{children}</div>
  )
}

export default Card