import React from 'react'
import { BiTrash } from 'react-icons/bi'

const DeleteButton = ({className, size , ...rest}) => {
    const buttonClass = `text-red-500 ${className}`
  return (
    <button  {...rest}>
        <BiTrash size={size} className={buttonClass}/>
    </button>
  )
}

export default DeleteButton