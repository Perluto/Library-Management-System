import React, { Component } from "react";
import "../style/form.css";

class Search extends Component {
  render() {
    return (
      <div style={{ marginLeft: "60px", marginTop: "20px" }}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search..." />
        </div>
      </div>
    );
  }
}

export default Search;
