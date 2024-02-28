import React, { useEffect } from 'react'
import { useWorkoutSession } from '../../contexts/WorkoutSessionContext'
import List from './List'
import Create from "./Create"
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { BiPlus } from 'react-icons/bi'

const WorkoutSessionContainer = () => {
  const {user} = useAuth()
  const {state, getSessions} = useWorkoutSession()


  useEffect(() => {
    getSessions()
  },[])

   return (
    <>
      <header className='flex h-[150px] px-4 mb-4 bg-gray-300'>
        Hello, {user.username}
      </header>
      <List sessions={state.workoutSessions}/>
      <Link to={"/new"} >
        <Button>
          <BiPlus />
        </Button>
      </Link>
    </>
     )
}

export default WorkoutSessionContainer