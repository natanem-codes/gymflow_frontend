import axios from "axios"
import Form from "../components/Form"
import Box from "../components/ui/Box"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import useForm from "../hooks/useForm"


const Register = () => {
  const {form, handleChange} = useForm({
    username: "", 
    firstName: "",
    lastName: "", 
    dob: "", 
    email: ""
})


const checkForm = () => {
  return Object.values(form).every(value => value !== "")
}

const handleSubmit = async evnet => {
  event.preventDefault()
  if(!checkForm()) {
      console.log("All inputs are required.")
      return
  }
  
  const res = await axios.post("http://localhost:5000/api/auth/register", form)

  console.log(res.status)

  console.log(res)

}


return (
  <Box className="max-w-[600px]">
            <h2>Register</h2>
        <Form className="flex flex-col gap-4" onHandleSubmit={handleSubmit}>
             <Input name={"username"} label={"Username"} value={form.username} onHandleChange={handleChange} />
             <Input name={"firstName"} label={"First Name"} value={form.firstName} onHandleChange={handleChange} />
             <Input name={"lastName"} label={"Last Name"} value={form.lastName} onHandleChange={handleChange} />
             <Input type="email" name={"email"} label={"email"} value={form.email} onHandleChange={handleChange} />
             <Input type="password" name={"password"} label={"password"} value={form.password} onHandleChange={handleChange} />
             <Input type="date" name={"dob"} label={"DoB"} value={form.dob} onHandleChange={handleChange} />
            <Button className={"self-start"} type="submit">Register</Button>
        </Form>
        </Box>
)
}

export default Register