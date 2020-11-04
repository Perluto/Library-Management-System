import React from "react";

const TableHeader = (props) => {
  let { column } = { ...props };
  return (
    <thead>
      <tr className="table-head-3">
        {column.map((col, index) => {
          return (
            <th
              key={col.label}
              className={"column" + (index + 1).toString() + "-3"}
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
