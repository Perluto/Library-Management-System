import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

import "../../../../style/table.css";

class Table extends Component {
  state = {
    column: this.props.column,
    books: this.props.books,
  };

  render() {
    return (
      <div className="container-table">
        <div className="wrap-table">
          <div className="table">
            <table>
              <TableHeader column={this.state.column}></TableHeader>
              <TableBody data={this.state.books}></TableBody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
