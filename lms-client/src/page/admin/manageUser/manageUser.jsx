import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "./Table/table";
import Pagination from "react-pagination-library";

import { getUser } from "../../../service/adminService";

const ManageUser = () => {
  const column = [
    { label: "Id", id: "id" },
    { label: "Name", id: "name" },
    { label: "Phone", id: "phone" },
    { label: "Email", id: "email" },
    { label: "Address", id: "address" },
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
        let result = await getUser(page);
        result = result.data.map((e) => {
          let date1 = Date.now();
          let date2 = new Date(e.dueDate);
          let status = Math.round((date1 - date2) / (1000 * 60 * 60 * 24));
          e.status = status < 0 ? "" : status;
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

export default ManageUser;
