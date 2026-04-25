import { NavLink } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BoltIcon from "@mui/icons-material/Bolt";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";

import "../styles/Sidebar.css";

function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  mobileSidebarOpen,
  setMobileSidebarOpen,
}) {
  const closeMobileSidebar = () => {
    setMobileSidebarOpen(false);
  };

  return (
    <>
      <div
        className={`sidebar-overlay ${mobileSidebarOpen ? "show" : ""}`}
        onClick={closeMobileSidebar}
      ></div>

      <aside
        className={`admin-sidebar ${sidebarOpen ? "" : "collapsed"} ${
          mobileSidebarOpen ? "mobile-show" : ""
        }`}
      >
        <div className="sidebar-brand">
          <div className="brand-icon">
            <BoltIcon />
          </div>

          {sidebarOpen && <h5>AdminPanel Pro</h5>}

          <button className="mobile-close-btn" onClick={closeMobileSidebar}>
            <CloseIcon />
          </button>
        </div>

        <button
          className="sidebar-toggle-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </button>

        <nav className="sidebar-menu">
          <NavLink
            to="/"
            end
            className="sidebar-link"
            onClick={closeMobileSidebar}
          >
            <DashboardIcon />
            {sidebarOpen && <span>Dashboard</span>}
          </NavLink>

          <NavLink
            to="/users"
            className="sidebar-link"
            onClick={closeMobileSidebar}
          >
            <PeopleOutlineIcon />
            {sidebarOpen && <span>Users</span>}
          </NavLink>

          <NavLink
            to="/products"
            className="sidebar-link"
            onClick={closeMobileSidebar}
          >
            <Inventory2OutlinedIcon />
            {sidebarOpen && <span>Products</span>}
          </NavLink>

          <NavLink
            to="/orders"
            className="sidebar-link"
            onClick={closeMobileSidebar}
          >
            <ShoppingCartOutlinedIcon />
            {sidebarOpen && <span>Orders</span>}
          </NavLink>

          <NavLink
  to="/analytics"
  className="sidebar-link"
  onClick={closeMobileSidebar}
>
  <AnalyticsOutlinedIcon />
  {sidebarOpen && <span>Analytics</span>}
</NavLink>

        </nav>

        <div className="sidebar-user">
          <div className="user-avatar">HR</div>

          {sidebarOpen && (
            <div>
              <h6>Hanin Reda</h6>
              <p>Super Admin</p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;