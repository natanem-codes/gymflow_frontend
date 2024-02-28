import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useWorkout } from '../../contexts/WorkoutContext'
import List from "./List"
import { BiArrowBack, BiPlus } from 'react-icons/bi'
import Button from '../ui/Button'

const WorkoutContainer = () => {

  const {id} = useParams()
  const {state: {workouts, session} , getWorkouts, getSessionInfo} = useWorkout()

  useEffect(() => {
    getWorkouts(id)
  }, [id])

  useEffect(() => {
    getSessionInfo(id)
  },[id])

    
  return (
    <div>
      <Link to={"/"}><BiArrowBack size={24} /></Link>
      <header>
        
      </header>
      <List workouts={workouts}/>
      <Link to={`add-workout`}>
          <Button>
          <BiPlus />
        </Button>
      </Link>
    </div>
  )
}

export default WorkoutContainer