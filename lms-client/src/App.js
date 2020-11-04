import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import SidebarAdmin from "./components/Sidebar-Admin/Sidebar-admin";

//user
import BookList from "./page/user/bookList/bookList";
import IssuedBooks from "./page/user/issuedBooks/issuedBooks";
import AllArchiveBooks from "./page/user/allArchiveBooks/allArchiveBooks";
import RequestBook from "./page/user/requestBook";

import Profile from "./page/profile";
import ChangePassword from "./page/changePassword";

//admin
import AddBooks from "./page/admin/manageBook/addBook";
import IssueBook from "./page/admin/issueBook";
import ManageBooks from "./page/admin/manageBook/manageBook";
import AllIssuedBooksForAdmin from "./page/admin/allIssuedBooks/allIssuedBooksForAdmin";
import AllArchiveBooksForAdmin from "./page/admin/allArchiveBooks/allArchiveBooksForAdmin";
import ManageUser from "./page/admin/manageUser/manageUser";
import AddUser from "./page/admin/manageUser/addUser";

import "./style/App.css";
import "react-pagination-library/build/css/index.css";
import "./style/pagination.css";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <main className="container">
        <Switch>
          <Route path="/book-list-for-user" component={BookList} />
          <Route
            path="/manage-issued-book-for-user"
            component={IssuedBooks}
          ></Route>
          <Route
            path="/manage-return-archives-user"
            component={AllArchiveBooks}
          ></Route>
          <Route path="/request-book" component={RequestBook}></Route>

          <Route path="/manage-book" component={ManageBooks}></Route>
          <Route path="/add-book" component={AddBooks}></Route>
          <Route path="/issue-book" component={IssueBook}></Route>
          <Route
            path="/manage-issued-books"
            component={AllIssuedBooksForAdmin}
          ></Route>
          <Route
            path="/manage-return-archive"
            component={AllArchiveBooksForAdmin}
          ></Route>
          <Route path="/manage-users" component={ManageUser}></Route>
          <Route path="/add-user" component={AddUser}></Route>

          <Route path="/profile" component={Profile}></Route>
          <Route path="/change-password" component={ChangePassword}></Route>

          <Route path="/" component={BookList} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
