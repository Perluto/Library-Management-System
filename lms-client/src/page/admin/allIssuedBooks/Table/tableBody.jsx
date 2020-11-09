import React from "react";
import { returnBook } from "../../../../service/adminService";

async function handleClick(id) {
  try {
    await returnBook(id);
  } catch (error) {
    alert("Failed");
  }
  window.location = "/manage-issued-books";
}

const TableBody = (props) => {
  const { column, data } = { ...props };
  return (
    <tbody>
      {data.map((item) => {
        return (
          <tr>
            {column.map((col, index) => {
              if (col.id === "action") {
                return (
                  <td className={"column" + (index + 1).toString() + "-4"}>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleClick(item["rentalId"])}
                    >
                      Return
                    </button>
                  </td>
                );
              }
              return (
                <td className={"column" + (index + 1).toString() + "-4"}>
                  {item[col.id]}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
