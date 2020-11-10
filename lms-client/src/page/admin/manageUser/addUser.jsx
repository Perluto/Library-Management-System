import React, { Component } from "react";

import { addUser } from "../../../service/adminService.js";

class AddUser extends Component {
  state = {
    data: {},
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleClick = async () => {
    try {
      await addUser(this.state.data);
      alert("Success");
      window.location = "/manage-users";
    } catch (error) {
      alert(error.message);
      window.location = "/manage-users";
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="header">Add User</div>
        <div className="wrap" style={{ height: "fit-content" }}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="form-group">
              <label htmlFor="username" className="label">
                UserName
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstname" className="label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                name="firstname"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname" className="label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address" className="label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                name="address"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="label">Role</label>
              <input
                type="text"
                className="form-control"
                value="Student"
                disabled
              />
            </div>
            <div className="form-group"></div>
            <button className="btn btn-primary" onClick={this.handleClick}>
              Add User
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddUser;
