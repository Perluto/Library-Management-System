import React from "react";

const AddBooks = () => {
  return (
    <React.Fragment>
      <div className="header">Add Book</div>
      <div className="wrap" style={{ height: "fit-content" }}>
        <form action="" style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="form-group">
            <label htmlFor="bookName" className="label">
              Book Name
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="bookName" className="label">
              Category
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="bookName" className="label">
              Authors
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="bookName" className="label">
              Quantity
            </label>
            <input type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Add Book</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddBooks;
