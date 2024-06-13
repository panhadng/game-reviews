import { useEffect, useState } from "react";
import {
  CloseIcon,
  Icon,
  SideBarContainer,
  SideBarLink,
  SideBarMenu,
  SideBarRoute,
  SideBarWrapper,
  SideBtnWrap,
} from "./SideBarElements";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../Axios";

const SideBar = ({ toggle, isOpen }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      const logout = await AxiosInstance.post("logout");
      localStorage.removeItem("authToken");
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.error("There was an error logging out!", error.message);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = localStorage.getItem("username");
      setUser(currentUser);
    };

    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }

    fetchUser();
  }, []);

  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="games" onClick={toggle}>
            Games
          </SideBarLink>
          <SideBarLink to="reviews" onClick={toggle}>
            Reviews
          </SideBarLink>
          <SideBarLink to="news" onClick={toggle}>
            News
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          {isLoggedIn ? (
            <SideBarRoute to="/" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>
              <span style={{ marginLeft: "8px" }}>{user}</span>
            </SideBarRoute>
          ) : (
            <SideBarRoute to="/login">Login</SideBarRoute>
          )}
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
