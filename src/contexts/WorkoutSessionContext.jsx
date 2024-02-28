import {createContext, useContext, useEffect, useReducer} from "react"

import axiosInstance from "../utils/axios"
import { useAuth } from "./AuthContext"

const WorkoutSessionContext = createContext()

const initialState = {
    workoutSessions: [],
    status: "idle",
    error: null
}

const ACTION_TYPES = {
    loading: "LOADING",
    fetch: "FETCH",
    error: "ERROR",
    addSession: "ADD_SESSION",
    deleteSession: "DELETE_SESSION",
    updateSession: "UPDATE_SESSION"
}


const workoutSessionReducer = (state, {type, payload}) => {
    switch(type) {
        case ACTION_TYPES.loading: 
        return {
            ...state, status: "loading"
        }
        case ACTION_TYPES.fetch:
            return {
                ...state,
                status: "success",
                workoutSessions: payload
            }
        case ACTION_TYPES.error:
            return {
                ...state, status: "error", error: payload
            }
        case ACTION_TYPES.addSession:
            return {
                ...state, status: "success", workoutSessions: [payload, ...state.workoutSessions]
            }
        case ACTION_TYPES.deleteSession: 
            return {
                ...state, status: "success", workoutSessions: state.workoutSessions.filter(session => session._id !== payload._id)
            }
        default: 
            return state
    }
}

const WorkoutSessionContextProvider = ({children}) => {
    const {user} = useAuth() || undefined
    const [state, dispatch] = useReducer(workoutSessionReducer, initialState)

    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${user?.token}`
    
        const getSessions = async () => {
          try {
            dispatch({type: ACTION_TYPES.loading})
            const {data} = await axiosInstance.get("/workoutSessions")
            dispatch({type: ACTION_TYPES.fetch, payload: data})
          } catch (error) {
            dispatch({type: ACTION_TYPES.error, payload: error.message})
          }
          
        }

    const addSession = async (session) => {
        try {
            const {data} = await axiosInstance.post("/workoutSessions", session)
            dispatch({type: ACTION_TYPES.addSession, payload: data})
        console.log(data)
        } catch (error) {
            dispatch({type: ACTION_TYPES.error, payload: error.message})
          }
    }
    const deleteSession = async (id) => {
        try {
            const {data} = await axiosInstance.delete(`/workoutSessions/${id}`)
            dispatch({type: ACTION_TYPES.deleteSession, payload: data})
        } catch (error) {
            dispatch({type: ACTION_TYPES.error, payload: error.message})
        }
    }

    const updateSession = async () => {}

    return <WorkoutSessionContext.Provider value={{state, getSessions, addSession, deleteSession, updateSession}}>
        {children}
    </WorkoutSessionContext.Provider>
}


export const useWorkoutSession = () => {
    const context =  useContext(WorkoutSessionContext)
    if(!context) throw new Error("useWorkoutSession must be used within an WorkoutSessionProvidor")
    return context
}

export default WorkoutSessionContextProvider