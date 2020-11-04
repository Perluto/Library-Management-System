import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

import "../../../../style/table-5.css";

class Table extends Component {
  state = {
    column: this.props.column,
    data: this.props.data,
  };

  render() {
    return (
      <div className="container-table-5">
        <div className="wrap-table-5">
          <div className="table-5">
            <table>
              <TableHeader column={this.state.column}></TableHeader>
              <TableBody
                column={this.state.column}
                data={this.state.data}
              ></TableBody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
