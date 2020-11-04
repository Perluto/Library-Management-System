import React from "react";
import Table from "./Table/table";

import "../../../style/header.css";

const AllArchiveBooks = () => {
  const column = [
    { label: "Id", id: "id" },
    { label: "Book Name", id: "name" },
    { label: "Issued Date", id: "issuedDate" },
    { label: "Due Date", id: "dueDate" },
    { label: "Returned Date", id: "returnedDate" },
    { label: "Note", id: "note" },
  ];
  const data = [
    {
      id: "1",
      name: "a",
      issuedDate: "b",
      dueDate: "aa",
      returnedDate: "1",
      note: "1",
    },
    {
      id: "1",
      name: "a",
      issuedDate: "b",
      dueDate: "aa",
      returnedDate: "1",
      note: "1",
    },
    {
      id: "1",
      name: "a",
      issuedDate: "b",
      dueDate: "aa",
      returnedDate: "1",
      note: "1",
    },
    {
      id: "1",
      name: "a",
      issuedDate: "b",
      dueDate: "aa",
      returnedDate: "1",
      note: "1",
    },
    {
      id: "1",
      name: "a",
      issuedDate: "b",
      dueDate: "aa",
      returnedDate: "1",
      note: "1",
    },
    {
      id: "1",
      name: "a",
      issuedDate: "b",
      dueDate: "aa",
      returnedDate: "1",
      note: "1",
    },
    {
      id: "1",
      name: "a",
      issuedDate: "b",
      dueDate: "aa",
      returnedDate: "1",
      note: "1",
    },
    {
      id: "1",
      name: "a",
      issuedDate: "b",
      dueDate: "aa",
      returnedDate: "1",
      note: "1",
    },
    {
      id: "1",
      name: "a",
      issuedDate: "b",
      dueDate: "aa",
      returnedDate: "1",
      note: "1",
    },
    {
      id: "1",
      name: "a",
      issuedDate: "b",
      dueDate: "aa",
      returnedDate: "1",
      note: "1",
    },
    {
      id: "1",
      name: "a",
      issuedDate: "b",
      dueDate: "aa",
      returnedDate: "1",
      note: "1",
    },
    {
      id: "1",
      name: "a",
      issuedDate: "b",
      dueDate: "aa",
      returnedDate: "1",
      note: "1",
    },
  ];

  return (
    <React.Fragment>
      <div className="header">View Issued Book History</div>
      <Table column={column} books={data}></Table>
    </React.Fragment>
  );
};

export default AllArchiveBooks;
