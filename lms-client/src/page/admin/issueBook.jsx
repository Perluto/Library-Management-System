import React, { Component } from "react";
import "../../style/header.css";
import "../../style/form.css";
import "../../style/button.css";

class IssuedBook extends Component {
  state = { data: { id: "", userId: "", dateIssued: "", dateReturn: "" } };
  handleClick = () => {
    console.log(this.state);
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    console.log(input.value);
    this.setState({ data });
  };

  render() {
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
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group center">
              <label htmlFor="" className="label">
                Book Details
              </label>
              <input
                type="text"
                className="form-control"
                name="bookDetails"
                disabled
              />
            </div>
            <div className="form-group center">
              <label htmlFor="" className="label">
                User Id
              </label>
              <input
                type="text"
                className="form-control"
                name="userId"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group center">
              <label htmlFor="" className="label">
                User Details
              </label>
              <input
                type="text"
                className="form-control"
                name="userDetails"
                disabled
              />
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
                name="dateReturn"
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
