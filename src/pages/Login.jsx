import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import Box from "../components/ui/Box";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useAuth } from "../contexts/AuthContext";
import useForm from "../hooks/useForm";

const Login = () => {
  const navigate = useNavigate();
  const {
    state: { form, error },
    handleChange,
  } = useForm({
    username: "",
    password: "",
  });

  const { state, login } = useAuth();

  const checkForm = () => {
    return Object.values(form).every((value) => value !== "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!checkForm()) {
      console.log("All inputs are required.");
      return;
    }

    // const {data} = await axios.post("http://localhost:5000/api/auth/login", form)
    await login(form);
    navigate("/");
    // console.log(data)
  };

  return (
    <Box className="max-w-[600px]">
      <h2>Login</h2>
      <Form className="flex flex-col gap-4" onHandleSubmit={handleSubmit}>
        <Input
          activeOnLoad={true}
          className=""
          name="username"
          label={"Username"}
          value={form.username}
          onHandleChange={handleChange}
        />
        <Input
          className=""
          type="password"
          name="password"
          label={"Password"}
          value={form.password}
          onHandleChange={handleChange}
        />
        <Button className={"self-start"} type="submit">
          Login
        </Button>
      </Form>
    </Box>
  );
};

export default Login;
