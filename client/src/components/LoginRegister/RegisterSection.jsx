import { useState } from "react";
import AxiosInstance from "../Axios";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  AuthLink,
} from "./AuthenticateElements";
import { LogoImage } from "../NavBar/NavBarElements";
import Logo from "../../assets/images/casino.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await AxiosInstance.post("register", {
        username: username,
        password: password,
        confirm_password: confirmPassword,
      });
      // Save the authentication token to local storage
      localStorage.setItem("authToken", response.data.token);
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error(
        "There was an error registering!",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            <LogoImage src={Logo} alt="Logo" />
            Gaming Insights
          </Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Register an account</FormH1>
              <FormLabel htmlFor="username">Username</FormLabel>
              <FormInput
                type="text"
                name="username"
                required
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput
                type="password"
                name="password"
                required
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormLabel htmlFor="confirm_password">
                Confirmation Password
              </FormLabel>
              <FormInput
                type="password"
                name="confirm_password"
                required
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <FormButton type="submit">Continue</FormButton>
              <Text style={{ color: "white" }}>
                Already have an account?{" "}
                <AuthLink to={"/login"}>Login Here</AuthLink>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Register;
