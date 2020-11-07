import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = { data: { username: "name", password: "" }, errors: {} };
  handleClick = () => {
    console.log(this.state);
  };

  handleChange = ({ currentTarget: input }) => {
    let data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrap">
          <div>
            <div className="form-group">
              <label className="label" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="form-control"
                name="username"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
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
              Login
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
