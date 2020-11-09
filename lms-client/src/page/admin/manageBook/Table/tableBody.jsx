import React from "react";

function handleClick(id) {
  console.log(id);
}

const TableBody = (props) => {
  const { column, data } = { ...props };

  return (
    <tbody>
      {data[0].map((item, id) => {
        return (
          <tr>
            {column.map((col, index) => {
              if (col.id === "action") {
                return (
                  <td className="column6-3">
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

              if (col.id === "quantity") {
                return (
                  <td className={"column" + (index + 1).toString() + "-3"}>
                    {data[1][id].quantity}
                  </td>
                );
              }

              if (col.id === "borrowed") {
                return (
                  <td className={"column" + (index + 1).toString() + "-3"}>
                    {data[2][id].borrowed}
                  </td>
                );
              }

              return (
                <td className={"column" + (index + 1).toString() + "-3"}>
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
