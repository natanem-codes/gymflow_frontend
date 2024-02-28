import Form from '../Form'
import Container from '../ui/Container'
import Input from '../ui/Input'
import Button from '../ui/Button'

import useForm from '../../hooks/useForm'
import { useWorkout } from '../../contexts/WorkoutContext'
import { useEffect, useState } from 'react'
import axiosInstance from '../../utils/axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'


const Create = () => {

    const {id:sessionId} = useParams()
    const navigate = useNavigate()
    const {addWorkout} = useWorkout()

    const {state: {form, error}, clearForm, checkForm, handleChange} = useForm({
        exercise: "", numberOfSets: 0, repetations: 0, rest: 0, weight: 0, notes: ""
    })
    const [exercises, setExercises] = useState([])

    useEffect(() => {
      const getWorkouts = async () => {
          const {data} = await axiosInstance.get(`/exercises`)
          setExercises(data)
    }
      getWorkouts()
  }, [])

    // console.log(exercises)

    const sanitizeForm = () => {
        for(let [key, val] of Object.entries(form)) {
            if(key === "numberOfSets" || key === "repetations" || key === "rest" || key === "weight") {
                form[key] = Number(val) || 0
            }
        }
    }

    const handleSubmit = async event => {
        event.preventDefault()
        checkForm()
        if(form.numberOfSets < 1 || form.repetations < 1 || form.weight < 2.5 || form.rest < 0) return
        sanitizeForm()
        addWorkout({...form, session: sessionId})
        clearForm()
        navigate(`/workoutSessions/${sessionId}`)
    }

  return (
    <Container>
           <Link to={`/sessions/${sessionId}`}>
                <BiArrowBack size={24}/>
            </Link>
        <header className='py-4'>
         
        </header>
        <h2 className='text-2xl text-center mb-4'>Create a new workout</h2>
        <Form onHandleSubmit={handleSubmit} className={"grid grid-cols-2 gap-4 border p-4"}>     
        {error && <p>{error}</p>} 

            <Input type='select' name={"exercise"} label={"Exercise"} value={form.exercise} onHandleChange={handleChange}>
                {exercises?.map(ex => <option key={ex._id} value={ex._id}>{ex.name}</option>)}
            </Input>
            <Input  required min={0} max={25} type='number' name={"numberOfSets"} label={"Sets"}  value={form.numberOfSets} onHandleChange={handleChange}/>
            <Input  required min={0} max={50} type='number' name={"repetations"} label={"Reps"}  value={form.repetations} onHandleChange={handleChange}/>
            <Input  required min={0} max={5} type='number' name={"rest"} label={"Rest"} value={form.rest} onHandleChange={handleChange}/>
            <Input  required min={0} step={2.5} type='number' name={"weight"} label={"Weight"} value={form.weight} onHandleChange={handleChange}/>
            <Input  type='textarea' name={"notes"} label={"Notes"}  value={form.notes} onHandleChange={handleChange}/>
            <Button>Create</Button>
                        
        </Form> 
    </Container>
  )
}

export default Create