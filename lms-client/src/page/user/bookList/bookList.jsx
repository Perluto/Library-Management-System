import React, { useState, useEffect } from "react";
import Table from "./Table/table";
import Search from "../../../components/search";
import Pagination from "react-pagination-library";
import { getBookList } from "../../../service/bookService";

import "../../../style/header.css";

const BookList = () => {
  const column = [
    { label: "Id", id: "id" },
    { label: "Book Name", id: "bookName" },
    { label: "Category", id: "category" },
    { label: "Quantity", id: "quantity" },
    { label: "Borrowed", id: "borrowed" },
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
      <div className="header">Books List</div>
      <Search></Search>
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

export default BookList;
