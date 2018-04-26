import React from "react";
import SortIcon from "./SortIcon";

const Table = props => {
  const { data, handleSorting, sortedColumn } = props;
  const content = data.map(e => e);
  const header = content.shift();

  return (
    <table className="table is-striped is-narrow is-hoverable">
      <thead>
        <tr>
          {header.map((column, index) => (
            <th key={`th${index}`}>
              <a id={`sortCol${index}`} onClick={handleSorting}>
                {column}<span> </span>
                <SortIcon key={`sh${index}`} content={column} index={index} sortedColumn={sortedColumn[0]} type={sortedColumn[1]} />
              </a>             
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {content.map((row, index) => (
          <tr key={`tr${index}`}>
            {row.map((column, index) => <td key={`td${index}`}>{column}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
