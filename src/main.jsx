import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import AuthContextProvider from './contexts/AuthContext.jsx'
import WorkoutSessionContextProvider from './contexts/WorkoutSessionContext.jsx'
import WorkoutContextProvider from './contexts/WorkoutContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter> 
      <AuthContextProvider>
        <WorkoutSessionContextProvider>
          <WorkoutContextProvider>
          <App />
          </WorkoutContextProvider>
        </WorkoutSessionContextProvider>
      </AuthContextProvider>
   </BrowserRouter>
  </React.StrictMode>,
)
