import React from "react";
import { Link } from "react-router-dom";
import Table from "./Table/table";

const ManageUser = () => {
  const column = [
    { label: "Id", id: "id" },
    { label: "Name", id: "name" },
    { label: "Phone", id: "phone" },
    { label: "Email", id: "email" },
    { label: "Address", id: "address" },
    { label: "Action", id: "action" },
  ];

  const data = [];

  return (
    <React.Fragment>
      <div className="header">Manage User</div>
      <div
        className="btn btn-primary"
        style={{ marginLeft: "50px", marginTop: "5x" }}
      >
        <Link to="/add-user" className="link">
          Add User
        </Link>
      </div>
      <div style={{ marginLeft: "60px", marginTop: "20px" }}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type User Name"
          />
        </div>
      </div>
      <Table data={data} column={column}></Table>
    </React.Fragment>
  );
};

export default ManageUser;
