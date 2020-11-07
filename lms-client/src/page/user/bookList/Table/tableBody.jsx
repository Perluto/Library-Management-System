import React from "react";

const TableBody = (props) => {
  const { column, data } = { ...props };
  return (
    <tbody>
      {data[0].map((item, id) => {
        return (
          <tr>
            {column.map((col, index) => {
              if (col.id === "quantity") {
                return (
                  <td className={"column" + (index + 1).toString()}>
                    {data[1][id].quantity}
                  </td>
                );
              }

              if (col.id === "borrowed") {
                return (
                  <td className={"column" + (index + 1).toString()}>
                    {data[2][id].borrowed}
                  </td>
                );
              }

              return (
                <td className={"column" + (index + 1).toString()}>
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
