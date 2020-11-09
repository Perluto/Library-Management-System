import React, { Component } from "react";

import { getBook } from "../../service/bookService.js";
import { profile } from "../../service/userService.js";
import { issueBook } from "../../service/adminService";

import "../../style/header.css";
import "../../style/form.css";
import "../../style/button.css";

class IssuedBook extends Component {
  state = {
    book: null,
    user: null,
    date: null,
  };

  handleClick = async () => {
    const { book, user, date } = this.state;
    if (book !== null && user !== null && date !== null) {
      try {
        const result = await issueBook(user, book, date);
         alert("Success");
         window.location = "/";
      } catch (error) {
         alert("Failed");
         window.location = "/";
      }
    }
  };

  getBook = async ({ currentTarget: input }) => {
    const book = { ...this.state.book };
    book[input.name] = input.value;

    if (input.value !== "") {
      const data = (await getBook(book.id)).data;
      book.name = data.name;
      book.quantity = data.quantity;
      book.borrowed = data.borrowed;
    }

    this.setState({ book });
  };

  getUser = async ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    user[input.name] = input.value;
    if (input.value !== "") {
      const data = (await profile(user.username)).data;
      user.id = data.id;
      user.name = data.firstname + " " + data.lastname;
    }

    this.setState({ user });
  };

  handleChange = ({ currentTarget: input }) => {
    const date = { ...this.state.date };
    date[input.name] = input.value;
    this.setState({ date });
  };

  render() {
    const { book, user } = this.state;
    return (
      <React.Fragment>
        <div className="header">Issue Book</div>
        <div className="wrap" style={{ height: "fit-content" }}>
          <div>
            <div className="form-group center">
              <label htmlFor="" className="label">
                ID
              </label>
              <input
                type="text"
                className="form-control"
                name="id"
                onChange={this.getBook}
              />
            </div>
            <div className="form-group center">
              <label htmlFor="" className="label">
                Book Details
              </label>
              <textarea
                className="form-control"
                style={{ width: "100%", height: "70px" }}
                name="bookDetails"
                value={book ? JSON.stringify(book) : ""}
                disabled
              ></textarea>
            </div>
            <div className="form-group center">
              <label htmlFor="" className="label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.getUser}
              />
            </div>
            <div className="form-group center">
              <label htmlFor="" className="label">
                User Details
              </label>
              <textarea
                className="form-control"
                style={{ width: "100%", height: "70px" }}
                name="userDetails"
                value={user ? JSON.stringify(user) : ""}
                disabled
              ></textarea>
            </div>
            <div className="form-group center">
              <label htmlFor="" className="label">
                Date Issued
              </label>
              <input
                type="date"
                className="form-control"
                name="dateIssued"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group center">
              <label htmlFor="" className="label">
                By when to Return
              </label>
              <input
                type="date"
                className="form-control"
                name="dateDue"
                onChange={this.handleChange}
              />
            </div>
            <button className="btn btn-primary" onClick={this.handleClick}>
              Issue Book
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default IssuedBook;
