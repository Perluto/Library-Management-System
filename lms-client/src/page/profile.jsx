import React, { Component } from "react";
import authService from "../service/authService.js";
import { profile } from "../service/userService.js";

class Profile extends Component {
  state = {
    data: {
      id: "",
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
    },
  };

  async componentDidMount() {
    const username = authService.getCurrentUser().username;
    const result = await profile(username);
    const data = result.data;
    this.setState({ data });
  }

  render() {
    const { id, firstname, lastname, email, phone, address } = this.state.data;
    return (
      <React.Fragment>
        <div className="header">Profile</div>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="form-group">
            <label className="label" htmlFor="id">
              User ID
            </label>
            <input
              id="id"
              type="text"
              className="form-control"
              name="id"
              value={id}
              disabled
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="firstname">
              First Name
            </label>
            <input
              id="firstname"
              type="text"
              className="form-control"
              name="firstname"
              value={firstname}
              disabled
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="lastname">
              Last Name
            </label>
            <input
              id="lastname"
              type="text"
              className="form-control"
              name="lastname"
              value={lastname}
              disabled
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="text"
              className="form-control"
              name="email"
              value={email}
              disabled
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              className="form-control"
              name="phone"
              value={phone}
              disabled
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="address">
              Address
            </label>
            <textarea
              id="address"
              className="form-control"
              style={{ width: "100%", height: "70px" }}
              name="address"
              value={address}
              disabled
            ></textarea>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
