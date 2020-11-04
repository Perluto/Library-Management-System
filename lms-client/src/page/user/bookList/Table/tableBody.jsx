import React from "react";

const TableBody = (props) => {
  const { data } = { ...props };
  return (
    <tbody>
      {data.map((item) => {
        return (
          <tr key={item.name}>
            <td className="column1">1</td>
            <td className="column2">{item.name}</td>
            <td className="column3">{item.category}</td>
            <td className="column4">{item.authors}</td>
            <td className="column5">{item.quantity}</td>
            <td className="column6">{item.borrowed}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
