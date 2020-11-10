import React from "react";

function handleClick(id) {
  console.log(id);
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
                  <td className="column6-6">
                    <button
                      style={{ marginLeft: "1px" }}
                      className="btn btn-danger"
                      onClick={() => handleClick(item["id"])}
                    >
                      Delete
                    </button>
                  </td>
                );
              }
              return (
                <td className={"column" + (index + 1).toString() + "-6"}>
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
