import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

import "../../style/sidebar.css";

const SidebarAdmin = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-toggle">
          <Link to="/" className="navbar-logo">
            Admin Panel
          </Link>
        </li>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon()}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarAdmin;
