import React, { useState, useEffect } from "react";
import Table from "./Table/table";
import { Link } from "react-router-dom";
import Pagination from "react-pagination-library";

import { getBookList } from "../../../service/bookService.js";

const ManageBooks = () => {
  const column = [
    { label: "Id", id: "id" },
    { label: "Book Name", id: "bookName" },
    { label: "Category", id: "category" },
    { label: "Quantity", id: "quantity" },
    { label: "Borrowed", id: "borrowed" },
    { label: "Action", id: "action" },
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
      const result = await getBookList(page);
      setData(result.data);
      setLoading(false);
    };

    getData();
  }, [page]);

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

export default ManageBooks;
