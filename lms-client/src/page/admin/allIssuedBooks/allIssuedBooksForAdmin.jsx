import React, { useState, useEffect } from "react";
import Table from "./Table/table";
import Pagination from "react-pagination-library";

import { getIssuedBook } from "../../../service/adminService";

const AllIssuedBooksForAdmin = () => {
  const column = [
    { label: "Book ID", id: "bookId" },
    { label: "Book Name", id: "name" },
    { label: "User ID", id: "userId" },
    { label: "User Name", id: "username" },
    { label: "Issued Date", id: "issuedDate" },
    { label: "Due Date", id: "dueDate" },
    { label: "Status", id: "status" },
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
      try {
        let result = await getIssuedBook(page);
        result = result.data.map((e) => {
          var date1 = Date.now();
          var date2 = new Date(e.dueDate);

          e.status = Math.round((date1 - date2) / (1000 * 60 * 60 * 24));
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

export default AllIssuedBooksForAdmin;
