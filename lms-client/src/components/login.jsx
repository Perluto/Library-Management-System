import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import authService from "../service/authService.js";

class Login extends Component {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  handleChange = ({ currentTarget: input }) => {
    let data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await authService.login(data.username, data.password);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    this.doSubmit();
  };

  render() {
    const errors = this.state.errors;
    if (authService.getCurrentUser()) return <Redirect to="/" />;

    return (
      <React.Fragment>
        <div className="wrap-1">
          <div className="header" style={{ color: "black" }}>
            Sign In
          </div>
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
              {errors["username"] && (
                <div className="alert alert-danger">{errors["username"]}</div>
              )}
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
              {errors["password"] && (
                <div className="alert alert-danger">{errors["password"]}</div>
              )}
            </div>
            <button
              className="btn btn-primary"
              style={{ marginTop: "1rem" }}
              onClick={this.handleClick}
            >
              Sign In
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
