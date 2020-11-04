import React from "react";

const TableBody = (props) => {
  const { column, data } = { ...props };
  return (
    <tbody>
      {data.map((item) => {
        return (
          <tr>
            {column.map((col, index) => {
              return (
                <td className={"column" + (index + 1).toString() + "-5"}>
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
