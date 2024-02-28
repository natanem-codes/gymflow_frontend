
import {Route, Routes} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Container from "./components/ui/Container"
import { useAuth } from "./contexts/AuthContext"
import Detail from "./components/workoutSession/Detail"
import WorkoutContainer from "./components/workout/WorkoutContainer"
import CreateWorkout from "./components/workout/Create"
import WorkoutSessionContainer from "./components/workoutSession/WorkoutSessionContainer"
import CreateSession from "./components/workoutSession/Create"

function App() {
  
  const {isAuthenticated} = useAuth()

  return (
   <div className="grid h-screen max-h-screen">
     <Navbar />
     <main>
      <Container className="">
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Login />}>
          <Route index element={<WorkoutSessionContainer />} />
          <Route path="sessions" element={<WorkoutSessionContainer />} />
          <Route path="new" element={<CreateSession />} />
        </Route>
        <Route path="sessions/:id" element={isAuthenticated ? <Detail />: <Login />}>
          <Route index element={<WorkoutContainer/>}/>
          <Route path="workouts" element={<WorkoutContainer />}/>
          <Route path="add-workout" element={<CreateWorkout />}/>
        </Route>
        <Route path="/me" element={isAuthenticated ? <Profile /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </Container>
     </main>
     <Footer />
   </div>
  )

}

export default App
