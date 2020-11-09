import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown/Dropdown";

import "../style/navbar.css";

const Navbar = (props) => {
  const user = props.user;
  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        {user.isAdmin ? "Admin Panel" : "User Panel"}
      </Link>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="item">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li className="navbar-item ">
          <div className="item">
            <i className="fas fa-bell"></i> Notification
          </div>
        </li>
        <li className="navbar-item" onClick={showDropdown}>
          <div className="item">
            <i className="fas fa-user-circle"></i>
          </div>
          {dropdown && <Dropdown setDropdown={setDropdown}></Dropdown>}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
