import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "../styles/Navbar.css";

function TopNavbar({ setMobileSidebarOpen }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="top-navbar">
      <div className="navbar-left">
        <button
          className="burger-btn d-lg-none"
          onClick={() => setMobileSidebarOpen(true)}
        >
          <MenuIcon />
        </button>

        <div>
          <h3>Dashboard</h3>
          <p>Friday, April 24, 2026</p>
        </div>
      </div>

      <div className="profile-dropdown">
        <button
          className="profile-btn"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className="profile-avatar">HR</div>

          <div className="profile-info">
            <h6>Hanin Reda</h6>
            <span>Super Admin</span>
          </div>

          <KeyboardArrowDownIcon />
        </button>

        {dropdownOpen && (
          <div className="profile-menu">
            <button>Profile</button>
            <button>Settings</button>
            <button className="logout-btn">Logout</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default TopNavbar;