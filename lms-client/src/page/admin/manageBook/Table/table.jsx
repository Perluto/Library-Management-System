import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

import "../../../../style/table-3.css";

class Table extends Component {
  state = {
    column: this.props.column,
    books: this.props.data,
  };

  render() {
    return (
      <div className="container-table-3">
        <div className="wrap-table-3">
          <div className="table-3">
            <table>
              <TableHeader column={this.state.column}></TableHeader>
              <TableBody
                column={this.state.column}
                data={this.state.books}
              ></TableBody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
