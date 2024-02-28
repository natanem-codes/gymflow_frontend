import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import axiosInstance from "../utils/axios";
import { useAuth } from "./AuthContext";

const WorkoutContext = createContext()

const initialState = {
    workouts: [],
    session: {},
    exercises: {},
    status: "idle",
    error: null
}

const ACTION_TYPES = {
    loading: "LOADING",
    fetch: "FETCH",
    getSessionInfo: "GET_SESSION_INFO",
    error: "ERROR",
    addWorkout: "ADD_WORKOUT",
    deleteWorkout: "DELETE_WORKOUT",
    updateWorkout: "UPDATE_WORKOUT"
}
const workoutReducer = (state, {type, payload}) => {
    switch(type) {
        case ACTION_TYPES.loading: 
        return {
            ...state, status: "loading"
        }
        case ACTION_TYPES.fetch:
            return {
                ...state, status: "success", workouts: payload
            }
        case ACTION_TYPES.getSessionInfo:
            return {
                ...state, status: "success", session: payload
            }
        case ACTION_TYPES.addWorkout:
            return {
                ...state, status: "success", workouts: [payload, ...state.workouts]
            }
        case ACTION_TYPES.error: 
        return {
            ...state, status: "error", error: payload
        }
        default: 
        return state
    }
}

const WorkoutContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(workoutReducer, {...initialState, workouts: JSON.parse(localStorage.getItem("workouts")) || []})

    const {user} = useAuth()


    axiosInstance.defaults.headers.common["Authorization"] =`Bearer ${user?.token}`
    
    useEffect(() => {
        localStorage.setItem("workouts", JSON.stringify(state.workouts))
    }, [state.workouts])

    const getSessionInfo = async (sessionId) => {
        try {
            const {data} = await axiosInstance.get(`workoutSessions/${sessionId}`)
            console.log(data)
            dispatch({type: ACTION_TYPES.getSessionInfo, payload: data})
        } catch (error) {
            dispatch({type: ACTION_TYPES.error, payload: error.message})
        }
    }

    const getWorkouts = async (sessionId) => {
        try {
            const {data} = await axiosInstance.get(`/workouts?session=${sessionId}`)
        dispatch({type: ACTION_TYPES.fetch, payload: data})
        } catch (error) {
            console.log(error.message)
        }

    }
    const addWorkout = async (formData) => {
        const {data} = await axiosInstance.post("/workouts", formData)
        console.log(data)
        dispatch({type: ACTION_TYPES.addWorkout, payload: data})
    }
    return <WorkoutContext.Provider value={{state, getWorkouts, addWorkout, getSessionInfo}}>
        {children}
    </WorkoutContext.Provider>
}

export const useWorkout = () => {
    const context = useContext(WorkoutContext)
    if(!context) throw new Error("useWorkout cannot be used outside the 'WorkoutContextProvider Provider.")
    return context
}


export default WorkoutContextProvider