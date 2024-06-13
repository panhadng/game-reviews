import { useState } from "react";
import {
  ProfileButton,
  ProfileDropdown,
  ProfileDropdownButton,
} from "../NavBar/NavBarElements";
import { useNavigate } from "react-router-dom";

const ProfileMenu = ({ user, handleLogout }) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative" }}>
      <ProfileButton
        onClick={() => setShowProfileDropdown(!showProfileDropdown)}
      >
        <i className="fas fa-user"></i>
        <span style={{ marginLeft: "8px" }}>{user}</span>
      </ProfileButton>
      {showProfileDropdown && (
        <ProfileDropdown>
          <ProfileDropdownButton
            onClick={() => {
              navigate("/playlist");
            }}
          >
            <i className="fas fa-gamepad"></i>
            Playlist
          </ProfileDropdownButton>
          <ProfileDropdownButton onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
            Logout
          </ProfileDropdownButton>
        </ProfileDropdown>
      )}
    </div>
  );
};

export default ProfileMenu;
