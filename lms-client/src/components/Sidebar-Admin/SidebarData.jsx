import React from "react";
export const SidebarData = [
  {
    title: "Manage Books",
    path: "/manage-book",
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
    title: "Issue Book",
    path: "/issue-book",
    icon: () => <i className="fas fa-book-open"></i>,
    cName: "sidebar-text",
  },
  {
    title: "All Issued Books",
    path: "/manage-issued-books",
    icon: () => <i className="fas fa-list-ol"></i>,
    cName: "sidebar-text",
  },
  {
    title: "All Archive Books",
    path: "/manage-return-archive",
    icon: () => <i className="fas fa-list-ol"></i>,
    cName: "sidebar-text",
  },
  {
    title: "Manage Users",
    path: "/manage-users",
    icon: () => <i className="fas fa-list-ol"></i>,
    cName: "sidebar-text",
  },
  {
    title: "View Book Request",
    path: "/view-request-book-data",
    icon: () => <i className="fas fa-pencil-alt"></i>,
    cName: "sidebar-text",
  },
];
