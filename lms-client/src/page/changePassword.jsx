import React from "react";
import "../style/form.css";
import "../style/button.css";

const ChangePassword = () => {
  return (
    <React.Fragment>
      <div className="header">Change Password</div>
      <div className="wrap">
        <form action="">
          <div className="form-group">
            <label className="label" htmlFor="newPassword">
              New Password
            </label>
            <input id="newPassword" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="confirmNewPassword">
              Confirm New Password
            </label>
            <input
              id="confirmNewPassword"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary" style={{ marginTop: "1rem" }}>
            Save
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ChangePassword;
