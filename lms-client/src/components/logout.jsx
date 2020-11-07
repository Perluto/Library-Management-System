import { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    window.location = "/login";
  }

  render() {
    return null;
  }
}

export default Logout;
