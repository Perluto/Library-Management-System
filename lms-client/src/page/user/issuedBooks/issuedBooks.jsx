import React, { useState, useEffect } from "react";
import Table from "./Table/table";
import Pagination from "react-pagination-library";

import "../../../style/header.css";

import authService from "../../../service/authService.js";
import { getIssuedBookForUser } from "../../../service/bookService.js";

const IssuedBooks = () => {
  const column = [
    { label: "Id", id: "bookId" },
    { label: "Book Name", id: "name" },
    { label: "Issued Date", id: "issuedDate" },
    { label: "Due Date", id: "dueDate" },
    { label: "Days To Go", id: "daysToGo" },
    { label: "Note", id: "note" },
  ];

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const changeCurrentPage = (numPage) => {
    setPage(numPage);
    setLoading(true);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const user = authService.getCurrentUser();
        let result = await getIssuedBookForUser(user.id, page);
        result = result.data.map((e) => {
          let date2 = new Date(e.issuedDate);
          let date1 = new Date(e.dueDate);
          let daysToGo = Math.round((date1 - date2) / (1000 * 60 * 60 * 24));
          e.daysToGo = daysToGo;
          return e;
        });

        setData(result);

        setLoading(false);
      } catch (error) {
        alert("Failed");
      }
    };

    getData();
  }, [page]);

  return (
    <React.Fragment>
      <div className="header">My Issued Books List</div>
      {loading ? (
        <div className="header">Loading...</div>
      ) : (
        <React.Fragment>
          <Table column={column} data={data}></Table>
          <div className="pagination">
            <Pagination
              currentPage={page}
              totalPages={10}
              changeCurrentPage={changeCurrentPage}
              theme="bottom-border"
            />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default IssuedBooks;
