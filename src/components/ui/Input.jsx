import React, { useEffect, useRef } from 'react'



const Input = ({children, type="text", name, label, value, className, onHandleChange, activeOnLoad = false, ...rest }) => {
  const inputClass = `border p-2 rounded outline-none ${className}`

  if(type === "textarea") {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-2xl" htmlFor={name}>{label}</label>
        <textarea {...rest} name={name} id={name} cols="10" rows="3" value={value} onChange={onHandleChange} className={inputClass} ></textarea>
      </div>
    )
  }

  if(type === "select") {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-2xl" htmlFor={name}>{label}</label>
        <select {...rest} name={name} id={name} value={value} onChange={onHandleChange} className={inputClass}>
          {children}
        </select>
      </div>
    )
  }

  const activeInputRef = useRef()
    useEffect(() => {
        activeInputRef.current?.focus()
    }, [])

  return (
    <div className='flex flex-col gap-2'>
        <label className="text-2xl" htmlFor={name}>{label}</label>
        <input {...rest} ref={activeOnLoad === true ? activeInputRef : null} className={inputClass} type={type} name={name} value={value} onChange={onHandleChange}/>
    </div>
  )
}

export default Input