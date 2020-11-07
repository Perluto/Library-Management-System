import React, { Component } from "react";
import "../style/form.css";
import "../style/button.css";

class ChangePassword extends Component {
  state = { password: "" };
  handleClick = () => {
    console.log(this.state);
  };

  handleChange = ({ currentTarget: input }) => {
    let password = { ...this.state };
    password = input.value;
    this.setState({ password });
  };
  
  render() {
    return (
      <React.Fragment>
        <div className="header">Change Password</div>
        <div className="wrap">
          <div>
            <div className="form-group">
              <label className="label" htmlFor="newPassword">
                New Password
              </label>
              <input
                id="newPassword"
                type="password"
                className="form-control"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <button
              className="btn btn-primary"
              style={{ marginTop: "1rem" }}
              onClick={this.handleClick}
            >
              Save
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChangePassword;
