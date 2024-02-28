import axios from 'axios'
import React, { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Card from '../components/ui/Card'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

  const {user, isAuthenticated} = useAuth()
  const navigate = useNavigate()
 

  useEffect(() => {
    if(!isAuthenticated) navigate("/login")


  }, [isAuthenticated])

  return (
    <div>
      <Card className={"max-w-[400px]"}>
        
      </Card>
    </div>
  )
}

export default Profile