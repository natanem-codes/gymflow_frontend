import React, { useState } from 'react'

const useForm = (initialState) => {
    const [state, setState] = useState({form: initialState, error: ""})

    const sanitizeForm = () => {
        
    }

    const clearForm = () => setState({form: initialState, error: ""})

    const checkForm  = () => {

        for (let el of Object.values(state.form)) {
                if(el === "") {
                    setState(state => ({...state, error: "All fields are required"}))
                }
            }
            return true
    }
    const handleChange = (event) => {
        const {name, value} = event.target
        setState(state => ({...state, form: {...state.form, [name]: value}}))
    }

    return {state, clearForm, checkForm, sanitizeForm,  handleChange}
}

export default useForm