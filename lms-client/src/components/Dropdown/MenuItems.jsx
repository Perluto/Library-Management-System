import React from "react";
export const MenuItems = [
  {
    title: "Profile",
    path: "./profile",
    icon: function () {
      return <i className="fas fa-user"></i>;
    },
    cName: "dropdown-link",
  },
  {
    title: "Logout",
    path: "./",
    icon: function () {
      return <i className="fas fa-sign-out-alt"></i>;
    },
    cName: "dropdown-link",
  },
];
