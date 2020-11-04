import React from "react";
import Table from "./Table/table";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const column = [
    { label: "Id", id: "id" },
    { label: "Book Name", id: "name" },
    { label: "Category", id: "category" },
    { label: "Quantity", id: "quantity" },
    { label: "Borrowed", id: "borrowed" },
    { label: "Action", id: "action" },
  ];
  const data = [];

  return (
    <React.Fragment>
      <div className="header">Management Books</div>
      <div
        className="btn btn-primary"
        style={{ marginLeft: "50px", marginTop: "5x" }}
      >
        <Link to="/add-book" className="link">
          Add Book
        </Link>
      </div>
      <div style={{ marginLeft: "60px", marginTop: "20px" }}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type Book Name"
          />
        </div>
      </div>
      <Table column={column} data={data}></Table>
    </React.Fragment>
  );
};

export default ManageBooks;
