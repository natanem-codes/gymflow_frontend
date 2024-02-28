import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Outlet, useNavigate } from 'react-router-dom'
import List from '../components/workoutSession/List'
import Container from '../components/ui/Container'
import Create from '../components/workoutSession/Create'
import { BiMinus, BiPlus } from 'react-icons/bi'
import axios from 'axios'

import {api} from '../../package.json'



const Home = () => {
  const {user, isAuthenticated} = useAuth()
  const [show, setShow] = useState(false)
  
  if(!isAuthenticated) {
    return
  }


return <Outlet />
}

export default Home