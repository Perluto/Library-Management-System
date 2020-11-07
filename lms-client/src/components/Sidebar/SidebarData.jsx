import React from "react";
export const SidebarData = [
  {
    title: "Books",
    path: "/book-list-for-user",
    icon: () => <i className="fas fa-book"></i>,
    cName: "sidebar-text",
  },
  {
    title: "Change Password",
    path: "/change-password",
    icon: () => <i className="fas fa-unlock-alt"></i>,
    cName: "sidebar-text",
  },
  {
    title: "Issued Books",
    path: "/manage-issued-book-for-user",
    icon: () => <i className="fas fa-book-open"></i>,
    cName: "sidebar-text",
  },
  {
    title: "All Archive Books",
    path: "/manage-return-archives-user",
    icon: () => <i className="fas fa-list-ol"></i>,
    cName: "sidebar-text",
  },
];
