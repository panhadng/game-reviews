import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import AxiosInstance from "../Axios";
import {
  LogoImage,
  MobileIcon,
  Nav,
  NavBarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavBarElements";
import Logo from "../../assets/images/casino.png";
import ProfileMenu from "./ProfileMenu";

const NavBar = ({ toggle }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      const logout = await AxiosInstance.post("logout");
      localStorage.removeItem("authToken");
      localStorage.removeItem("username");
      localStorage.removeItem("userId");
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <Nav scrolled={scrolled}>
          <NavBarContainer>
            <NavLogo to={"/"} onClick={toggleHome}>
              <LogoImage src={Logo} alt="Logo" />
              Gaming Insights
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="/games" isActive={location.pathname === "/games"}>
                  Games
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/reviews"
                  isActive={location.pathname === "/reviews"}
                >
                  Reviews
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/news" isActive={location.pathname === "/news"}>
                  News
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              {isLoggedIn ? (
                <ProfileMenu user={user} handleLogout={handleLogout} />
              ) : (
                <NavBtnLink to="/login">Login</NavBtnLink>
              )} 
            </NavBtn>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
