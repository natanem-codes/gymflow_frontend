import React from 'react'

const Form = ({children, className, onHandleSubmit}) => {
  const formClass = ` ${className}`
  return (
    <form className={formClass} onSubmit={onHandleSubmit}>
        {children}
    </form>
  )
}

export default Form