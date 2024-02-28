import React from 'react'
import Container from '../ui/Container'
import useForm from '../../hooks/useForm'
import Input from '../ui/Input'
import Form from "../Form"
import Button from '../ui/Button'
import axios from 'axios'
import {api} from "../../../package.json"
import { useAuth } from '../../contexts/AuthContext'
import { useWorkoutSession } from '../../contexts/WorkoutSessionContext'
import { Link, useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

const Create = () => {
    const {state:{form, error}, clearForm, checkForm ,handleChange} = useForm({
        title: "", note: ""
    })

    const navigate = useNavigate()

    const {addSession} = useWorkoutSession()

    const handleSubmit = async event => {
        event.preventDefault()
        checkForm()
        addSession(form)
        clearForm()
        navigate("/")
    } 
  return (
    <Container className="w-[600px]">
        <Link to={`/`}>
            <BiArrowBack size={24}/>
        </Link>
        <header className='py-4'>
         
        </header>
        <h2 className='text-2xl text-center mb-4'>Create a new workout</h2>
        <Form onHandleSubmit={handleSubmit}> 
            <div>
                {error}
            </div>
            <Input name={"title"} value={form.title} label={"Title"} onHandleChange={handleChange} />
            <Input type="textarea" name={"note"} value={form.note} label={"Note"} onHandleChange={handleChange} />
            <Button className={"my-4"}>Create</Button>
        </Form>
    </Container>
  )
}

export default Create