import React from "react";
import "../../style/header.css";

const RequestBook = () => {
  return (
    <React.Fragment>
      <div className="header">Book Request</div>
      <div className="wrap">
        <form action="">
          <div className="form-group">
            <label className="label" htmlFor="BookName">
              Book Name*
            </label>
            <input
              id="BookName"
              type="text"
              className="form-control"
              style={{ width: "500px" }}
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="Note">
              Note*
            </label>
            <textarea
              name=""
              id="Note"
              placeholder="Why u required this book?"
              className="form-control"
              style={{ width: "500px", height: "120px" }}
            ></textarea>
          </div>
          <button className="btn btn-primary" style={{ marginTop: "1rem" }}>
            Submit Request
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default RequestBook;
