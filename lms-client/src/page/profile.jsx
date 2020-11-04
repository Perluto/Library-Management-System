import React from "react";

const Profile = () => {
  return (
    <React.Fragment>
      <div className="header">Profile</div>
      <div
        className="wrap"
        style={{display: "flex", flexWrap: "wrap" }}
      >
        <div className="form-group">
          <label className="label" htmlFor="id">
            User ID
          </label>
          <input id="id" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="firstName">
            First Name
          </label>
          <input id="firstName" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="lastName">
            Last Name
          </label>
          <input id="lastName" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input id="email" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="phone">
            Phone
          </label>
          <input id="phone" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="address">
            Address
          </label>
          <textarea
            id="address"
            className="form-control"
            style={{ width: "100%", height: "70px" }}
          ></textarea>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
