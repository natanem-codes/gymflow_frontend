import Form from "../components/Form";
import Box from "../components/ui/Box";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import useForm from "../hooks/useForm";
import { useAuth } from "../contexts/AuthContext";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    state: { form, error },
    handleChange,
  } = useForm({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    dob: "",
    email: "",
  });

  const { state, register } = useAuth();
  const navigate = useNavigate();

  const checkForm = () => {
    return Object.values(form).every((value) => value !== "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!checkForm()) {
      console.log("All inputs are required.");
      return;
    }

    await register(form);
    navigate("/");
  };

  return (
    <Box className="max-w-[600px]">
      <h2>Register</h2>
      <Form className="flex flex-col gap-4" onHandleSubmit={handleSubmit}>
        <Input
          name={"username"}
          label={"Username"}
          value={form.username}
          onHandleChange={handleChange}
        />
        <Input
          name={"firstName"}
          label={"First Name"}
          value={form.firstName}
          onHandleChange={handleChange}
        />
        <Input
          name={"lastName"}
          label={"Last Name"}
          value={form.lastName}
          onHandleChange={handleChange}
        />
        <Input
          type="email"
          name={"email"}
          label={"email"}
          value={form.email}
          onHandleChange={handleChange}
        />
        <Input
          type="password"
          name={"password"}
          label={"password"}
          value={form.password}
          onHandleChange={handleChange}
        />
        <Input
          type="date"
          name={"dob"}
          label={"DoB"}
          value={form.dob}
          onHandleChange={handleChange}
        />
        <Button className={"self-start"} type="submit">
          Register
        </Button>
      </Form>
    </Box>
  );
};

export default Register;
