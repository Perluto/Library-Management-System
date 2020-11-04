import React from "react";
import "../../style/header.css";
import "../../style/form.css";
import "../../style/button.css";

const IssueBook = () => {
  return (
    <React.Fragment>
      <div className="header">Issue Book</div>
      <div className="wrap" style={{ height: "fit-content" }}>
        <form action="">
          <div className="form-group center">
            <label htmlFor="" className="label">
              ID
            </label>
            <input type="text" className="form-control " />
          </div>
          <div className="form-group center">
            <label htmlFor="" className="label">
              Book Details
            </label>
            <input type="text" className="form-control" disabled />
          </div>
          <div className="form-group center">
            <label htmlFor="" className="label">
              User Id
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group center">
            <label htmlFor="" className="label">
              User Details
            </label>
            <input type="text" className="form-control" disabled />
          </div>
          <div className="form-group center">
            <label htmlFor="" className="label">
              Date Issued
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group center">
            <label htmlFor="" className="label">
              By when to Return
            </label>
            <input type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Issue Book</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default IssueBook;
