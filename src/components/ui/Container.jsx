import React from 'react'

const Container = ({children, className}) => {
    const containerClass = `max-w-[1100px] m-auto p-4 ${className}`
  return (
    <div className={containerClass} >{children}</div>
  )
}

export default Container