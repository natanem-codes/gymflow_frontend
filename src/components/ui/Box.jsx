import React from 'react'

const Box = ({children, className}) => {
    const boxClass = `my-4 mx-auto ${className}`
  return (
    <div className={boxClass}>{children}</div>
  )
}

export default Box