import React from 'react'

const Button = ({children, className, ...rest}) => {
    const buttonClass = `inline-block border-none bg-blue-600 text-white uppercase rounded-md transition-colors hover:bg-blue-500 shadow-md"bg-blue-600 uppercase transition-colors hover:bg-blue-500 shadow-md px-4 py-2 ${className}`
  return (
    <button className={buttonClass} {...rest}>{children}</button>
  )
}

export default Button