import React, { useState, useEffect } from "react";
import Table from "./Table/table";
import Search from "../../../components/search";
import Pagination from "react-pagination-library";
import axios from "axios";

import "../../../style/header.css";

const BookList = () => {
  const [page, setPage] = useState(1);

  const changeCurrentPage = (numPage) => {
    setPage(numPage);
  };

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get("http://localhost:3900/book/list/1");
      console.log(result);
    };

    getData();
    
  }, []);

  const column = [
    { label: "Id" },
    { label: "Book Name" },
    { label: "Category" },
    { label: "Authors" },
    { label: "Quantity" },
    { label: "Borrowed" },
  ];

  const data = [
    { name: "a", category: "b", authors: "aa", quantity: "1", borrowed: "1" },
    { name: "a", category: "b", authors: "aa", quantity: "1", borrowed: "1" },
    { name: "a", category: "b", authors: "aa", quantity: "1", borrowed: "1" },
    { name: "a", category: "b", authors: "aa", quantity: "1", borrowed: "1" },
    { name: "a", category: "b", authors: "aa", quantity: "1", borrowed: "1" },
    { name: "a", category: "b", authors: "aa", quantity: "1", borrowed: "1" },
    { name: "a", category: "b", authors: "aa", quantity: "1", borrowed: "1" },
    { name: "a", category: "b", authors: "aa", quantity: "1", borrowed: "1" },
    { name: "a", category: "b", authors: "aa", quantity: "1", borrowed: "1" },
    { name: "a", category: "b", authors: "aa", quantity: "1", borrowed: "1" },
    { name: "a", category: "b", authors: "aa", quantity: "1", borrowed: "1" },
    { name: "a", category: "b", authors: "aa", quantity: "1", borrowed: "1" },
  ];

  return (
    <React.Fragment>
      <div className="header">Books List For User</div>
      <Search></Search>
      <Table column={column} books={data}></Table>
      <div className="pagination">
        <Pagination
          currentPage={page}
          totalPages={10}
          changeCurrentPage={changeCurrentPage}
          theme="bottom-border"
        />
      </div>
    </React.Fragment>
  );
};

export default BookList;
