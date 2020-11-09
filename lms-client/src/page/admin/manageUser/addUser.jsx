import React from "react";

const AddUser = () => {
  return (
    <React.Fragment>
      <div className="header">Add User</div>
      <div className="wrap" style={{ height: "fit-content" }}>
        <form action="" style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="form-group">
            <label htmlFor="firstName" className="label">
              First Name
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="label">
              Last Name
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="label">
              Phone
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="label">
              Address
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label className="label">Role</label>
            <input
              type="text"
              className="form-control"
              value="Student"
              disabled
            />
          </div>
          <button className="btn btn-primary">Add User</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddUser;
