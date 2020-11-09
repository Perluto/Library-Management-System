import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import SidebarAdmin from "./components/Sidebar-Admin/Sidebar-admin";
import ProtectedRouted from "./components/protectedRouted.jsx";

import Login from "./components/login";
import Logout from "./components/logout";

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

import authService from "./service/authService";

import "./style/App.css";
import "react-pagination-library/build/css/index.css";
import "./style/pagination.css";
import "./style/alert.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = authService.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        {user && (
          <React.Fragment>
            <Navbar user={user}></Navbar>
            {user.isAdmin ? <SidebarAdmin></SidebarAdmin> : <Sidebar></Sidebar>}
          </React.Fragment>
        )}

        <main className={user === null ? "container-1" : "container"}>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/logout" component={Logout}></Route>
            <ProtectedRouted
              path="/book-list-for-user"
              component={BookList}
            ></ProtectedRouted>
            <ProtectedRouted
              path="/manage-issued-book-for-user"
              component={IssuedBooks}
            ></ProtectedRouted>
            <ProtectedRouted
              path="/manage-return-archives-user"
              component={AllArchiveBooks}
            ></ProtectedRouted>
            <ProtectedRouted
              path="/request-book"
              component={RequestBook}
            ></ProtectedRouted>
            <ProtectedRouted
              path="/manage-book"
              component={ManageBooks}
            ></ProtectedRouted>
            <ProtectedRouted
              path="/add-book"
              component={AddBooks}
            ></ProtectedRouted>
            <ProtectedRouted
              path="/issue-book"
              component={IssueBook}
            ></ProtectedRouted>
            <ProtectedRouted
              path="/manage-issued-books"
              component={AllIssuedBooksForAdmin}
            ></ProtectedRouted>
            <ProtectedRouted
              path="/manage-return-archive"
              component={AllArchiveBooksForAdmin}
            ></ProtectedRouted>
            <ProtectedRouted
              path="/manage-users"
              component={ManageUser}
            ></ProtectedRouted>
            <ProtectedRouted
              path="/add-user"
              component={AddUser}
            ></ProtectedRouted>
            <ProtectedRouted
              path="/profile"
              component={Profile}
            ></ProtectedRouted>
            <ProtectedRouted
              path="/change-password"
              component={ChangePassword}
            ></ProtectedRouted>
            <ProtectedRouted path="/" component={BookList}></ProtectedRouted>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
