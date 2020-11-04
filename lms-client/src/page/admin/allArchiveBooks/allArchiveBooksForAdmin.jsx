import React from "react";
import Table from "./Table/table";

const AllArchiveBooksForAdmin = () => {
  const column = [
    { label: "Book ID", id: "id" },
    { label: "Book Name", id: "name" },
    { label: "User ID", id: "userId" },
    { label: "User Name", id: "username" },
    { label: "Issued Date", id: "issuedDate" },
    { label: "Due Date", id: "dueDate" },
    { label: "Returned Date", id: "returnedDate" },
    { label: "Status", id: "status" },
  ];
  const data = [];

  return (
    <React.Fragment>
      <div className="header">Manage Issued Book</div>
      <div style={{ display: "flex", marginLeft: "60px", marginTop: "20px" }}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type Book Name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type User Name"
          />
        </div>
      </div>
      <Table column={column} data={data}></Table>
    </React.Fragment>
  );
};

export default AllArchiveBooksForAdmin;
