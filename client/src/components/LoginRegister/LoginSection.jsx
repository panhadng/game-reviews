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
import { useEffect, useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // manage the csrftoken
  const getCSRFToken = async () => {
    try {
      const response = await AxiosInstance.get("csrf");
      return response.data.csrfToken;
    } catch (error) {
      console.error("Failed to fetch CSRF token:", error);
      throw error;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const csrfToken = await getCSRFToken();
      const response = await AxiosInstance.post(
        "login",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "X-CSRFToken": csrfToken,
          },
        }
      );
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("userId", response.data.user_id);
      navigate("/");
    } catch (error) {
      console.error(
        "There was an error logging in!",
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
              <FormH1>Login to your account</FormH1>
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
              <FormButton type="submit">Continue</FormButton>
              <Text style={{ color: "white" }}>
                Do not have an account?{" "}
                <AuthLink to={"/register"}>Register Here</AuthLink>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Login;
