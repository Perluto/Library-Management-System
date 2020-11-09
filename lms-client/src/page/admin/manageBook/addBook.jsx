import React, { Component } from "react";

import { getCategory } from "../../../service/categoryService.js";
import { addBook } from "../../../service/adminService";

class AddBooks extends Component {
  state = {
    category: [],
    data: {
      category: 1,
    },
  };

  async componentDidMount() {
    try {
      const category = (await getCategory()).data;
      this.setState({ category });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleClick = async () => {
    try {
      await addBook(this.state.data);
      alert("Success");
      window.location = "/manage-book";
    } catch (error) {
      alert(error.message);
      window.location = "/manage-book";
    }
  };

  render() {
    const category = this.state.category;

    return (
      <React.Fragment>
        <div className="header">Add Book</div>
        <div className="wrap" style={{ height: "fit-content" }}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="form-group">
              <label htmlFor="bookName" className="label">
                Book Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bookName" className="label">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="form-control"
                onChange={this.handleChange}
              >
                {category.map((e) => {
                  return <option value={e.id}>{e.name}</option>;
                })}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="bookName" className="label">
                Authors
              </label>
              <input
                type="text"
                className="form-control"
                name="author"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bookName" className="label">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                className="form-control"
                min="1"
                onChange={this.handleChange}
              />
            </div>
            <button className="btn btn-primary" onClick={this.handleClick}>
              Add Book
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddBooks;
