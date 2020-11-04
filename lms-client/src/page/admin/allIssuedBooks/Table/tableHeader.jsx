import React from "react";

const TableHeader = (props) => {
  let { column } = { ...props };
  return (
    <thead>
      <tr className="table-head-4">
        {column.map((col, index) => {
          return (
            <th
              key={col.label}
              className={"column" + (index + 1).toString() + "-4"}
            >
              {col.label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
